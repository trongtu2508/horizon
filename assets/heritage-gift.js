const WISHLIST_KEY = 'heritage_wishlist_v1';
const WISHLIST_LIMIT = 50;

function readWishlist() {
  try {
    const value = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    if (!Array.isArray(value)) return [];
    return value.filter((handle) => typeof handle === 'string' && handle.length > 0).slice(0, WISHLIST_LIMIT);
  } catch {
    return [];
  }
}

function writeWishlist(handles) {
  const normalized = [...new Set(handles)].slice(0, WISHLIST_LIMIT);
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(normalized));
  } catch {
    // Keep the UI usable when storage is disabled by the browser.
  }
  syncWishlistUi(normalized);
  document.dispatchEvent(
    new CustomEvent('heritage:wishlist-change', {
      detail: { handles: normalized, count: normalized.length },
    })
  );
  return normalized;
}

function syncWishlistUi(handles = readWishlist()) {
  const selected = new Set(handles);

  document.querySelectorAll('[data-heritage-wishlist-handle]').forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    const active = selected.has(button.dataset.heritageWishlistHandle || '');
    button.setAttribute('aria-pressed', String(active));
    const label = active ? button.dataset.removeLabel : button.dataset.addLabel;
    if (label) button.setAttribute('aria-label', label);
    const text = button.querySelector('[data-wishlist-label]');
    if (text && label) text.textContent = label;
  });

  document.querySelectorAll('[data-heritage-wishlist-count]').forEach((badge) => {
    badge.textContent = String(handles.length);
    badge.setAttribute('data-count', String(handles.length));
  });
}

function toggleWishlist(button) {
  const handle = button.dataset.heritageWishlistHandle;
  if (!handle) return;
  const handles = readWishlist();
  const next = handles.includes(handle) ? handles.filter((item) => item !== handle) : [handle, ...handles];
  writeWishlist(next);
}

async function fetchWishlistProduct(handle) {
  const response = await fetch(`/products/${encodeURIComponent(handle)}.js`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`Product ${handle} is unavailable`);
  return response.json();
}

function formatMoney(cents, currency, locale) {
  return new Intl.NumberFormat(locale || 'en-US', {
    style: 'currency',
    currency: currency || 'USD',
  }).format(cents / 100);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createWishlistCard(product, section) {
  const article = document.createElement('article');
  article.className = 'heritage-wishlist-card';
  const variant = product.variants?.find((item) => item.available) || product.variants?.[0];
  const image = product.featured_image || product.images?.[0] || '';
  const price = formatMoney(product.price, section.dataset.currency, section.dataset.locale);
  const removeLabel = section.dataset.removeLabel || 'Remove from wishlist';
  const addLabel = section.dataset.addLabel || 'Add to wishlist';
  const addToBag = section.dataset.addToBag || 'Add to bag';
  const soldOut = section.dataset.soldOut || 'Sold out';

  article.innerHTML = `
    <a class="heritage-wishlist-card__media" href="${escapeHtml(product.url)}">
      ${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy" width="720" height="900">` : ''}
    </a>
    <h2><a href="${escapeHtml(product.url)}">${escapeHtml(product.title)}</a></h2>
    <p>${escapeHtml(price)}</p>
    <div class="heritage-wishlist-card__actions">
      <button class="button" type="button" data-wishlist-add ${variant?.available ? '' : 'disabled'} data-variant-id="${variant?.id || ''}">
        <span class="button-text">${escapeHtml(variant?.available ? addToBag : soldOut)}</span>
      </button>
      <button class="heritage-wishlist-button" type="button" data-heritage-wishlist-handle="${escapeHtml(product.handle)}" data-add-label="${escapeHtml(addLabel)}" data-remove-label="${escapeHtml(removeLabel)}" aria-label="${escapeHtml(removeLabel)}" aria-pressed="true">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>`;

  return article;
}

async function addWishlistVariant(button) {
  const variantId = Number(button.dataset.variantId);
  if (!variantId) return;
  button.disabled = true;
  try {
    const response = await fetch(`${window.Theme?.routes?.cart_add_url || '/cart/add.js'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: [{ id: variantId, quantity: 1 }] }),
    });
    if (!response.ok) throw new Error('Unable to add product');
    window.location.assign(window.Theme?.routes?.cart_url || '/cart');
  } catch {
    button.disabled = false;
  }
}

async function renderWishlistPage(section) {
  const grid = section.querySelector('[data-wishlist-grid]');
  const empty = section.querySelector('[data-wishlist-empty]');
  if (!grid || !empty) return;

  const handles = readWishlist();
  if (handles.length === 0) {
    empty.hidden = false;
    return;
  }

  const results = await Promise.allSettled(handles.map(fetchWishlistProduct));
  const products = results.flatMap((result) => (result.status === 'fulfilled' ? [result.value] : []));
  const validHandles = products.map((product) => product.handle);
  if (validHandles.length !== handles.length) writeWishlist(validHandles);

  grid.replaceChildren(...products.map((product) => createWishlistCard(product, section)));
  empty.hidden = products.length > 0;
}

function initializeReveal() {
  if (document.documentElement.dataset.heritageReveal !== 'true') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('heritage-reveal-enabled');
  const sections = [...document.querySelectorAll('.content-for-layout > .shopify-section')].slice(1);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('heritage-reveal-pending');
        entry.target.classList.add('heritage-reveal-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  sections.forEach((section) => {
    section.classList.add('heritage-reveal-pending');
    observer.observe(section);
  });
}

const GIFT_FINDER_FILTERS = {
  recipient: 'filter.p.m.custom.recipient',
  occasion: 'filter.p.m.custom.occasion',
  budget: 'filter.v.price.lte',
};

function initializeGiftFinder(root = document) {
  root.querySelectorAll('[data-heritage-gift-finder]').forEach((section) => {
    if (section.dataset.giftFinderReady === 'true') return;
    const form = section.querySelector('[data-gift-finder-form]');
    const submit = section.querySelector('[data-gift-finder-submit]');
    if (!(form instanceof HTMLFormElement) || !(submit instanceof HTMLButtonElement)) return;

    const updateState = () => {
      submit.disabled = !form.querySelector('[data-filter-dimension]:checked');
    };

    form.addEventListener('change', updateState);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const url = new URL(form.action, window.location.origin);
      form.querySelectorAll('[data-filter-dimension]:checked').forEach((input) => {
        const parameter = GIFT_FINDER_FILTERS[input.dataset.filterDimension];
        const value = input.value.trim();
        if (parameter && value) url.searchParams.set(parameter, value);
      });
      window.location.assign(url.toString());
    });

    section.dataset.giftFinderReady = 'true';
    updateState();
  });
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const wishlistButton = target.closest('[data-heritage-wishlist-handle]');
  if (wishlistButton instanceof HTMLButtonElement) {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(wishlistButton);
    return;
  }

  const addButton = target.closest('[data-wishlist-add]');
  if (addButton instanceof HTMLButtonElement) addWishlistVariant(addButton);
});

document.addEventListener('DOMContentLoaded', () => {
  syncWishlistUi();
  initializeReveal();
  initializeGiftFinder();
  document.querySelectorAll('[data-heritage-wishlist-page]').forEach(renderWishlistPage);
});

document.addEventListener('shopify:section:load', (event) => {
  syncWishlistUi();
  initializeGiftFinder(event.target);
});
