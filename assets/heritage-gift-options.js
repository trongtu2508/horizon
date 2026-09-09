class HeritageGiftOptions extends HTMLElement {
  connectedCallback() {
    this.toggle = this.querySelector('[ref="giftToggle"]');
    this.panel = this.querySelector('[ref="messagePanel"]');
    this.message = this.querySelector('[ref="giftMessage"]');
    this.counter = this.querySelector('[ref="remainingCharacters"]');
    if (!this.toggle || !this.panel || !this.message) return;

    this.toggle.addEventListener('change', () => this.updateVisibility());
    this.message.addEventListener('input', () => this.updateCounter());
    this.updateVisibility();
    this.updateCounter();
  }

  updateVisibility() {
    const active = this.toggle.checked;
    this.panel.hidden = !active;
    this.message.disabled = !active;
    if (!active) this.message.value = '';
    if (active) this.message.focus({ preventScroll: true });
    this.updateCounter();
  }

  updateCounter() {
    if (!this.counter || !this.message) return;
    this.counter.textContent = String(250 - this.message.value.length);
  }
}

if (!customElements.get('heritage-gift-options')) {
  customElements.define('heritage-gift-options', HeritageGiftOptions);
}
