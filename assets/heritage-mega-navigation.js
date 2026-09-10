class HeritageMegaNavigation extends HTMLElement {
  connectedCallback() {
    this.details = [...this.querySelectorAll('[data-mega-details]')];
    this.abortController = new AbortController();
    const { signal } = this.abortController;

    for (const detail of this.details) {
      detail.addEventListener('pointerenter', () => this.open(detail), { signal });
      detail.addEventListener('pointerleave', () => this.scheduleClose(detail), { signal });
      detail.addEventListener('focusout', (event) => {
        if (!detail.contains(event.relatedTarget)) detail.open = false;
      }, { signal });
      detail.querySelector('summary')?.addEventListener('click', () => {
        this.closeOthers(detail);
      }, { signal });
    }

    document.addEventListener('click', (event) => {
      if (!this.contains(event.target)) this.closeOthers();
    }, { signal });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.closeOthers();
    }, { signal });
  }

  disconnectedCallback() {
    this.abortController?.abort();
  }

  open(detail) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    window.clearTimeout(this.closeTimer);
    this.closeOthers(detail);
    detail.open = true;
  }

  scheduleClose(detail) {
    window.clearTimeout(this.closeTimer);
    this.closeTimer = window.setTimeout(() => {
      detail.open = false;
    }, 140);
  }

  closeOthers(exception) {
    window.clearTimeout(this.closeTimer);
    for (const detail of this.details) {
      if (detail !== exception) detail.open = false;
    }
  }
}

if (!customElements.get('heritage-mega-navigation')) {
  customElements.define('heritage-mega-navigation', HeritageMegaNavigation);
}
