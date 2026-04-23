import data from '../data/pricing.json';

const CUBE_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7.5 L12 3 L21 7.5 L21 16.5 L12 21 L3 16.5 Z" />
    <path d="M3 7.5 L12 12 L21 7.5" />
    <path d="M12 12 L12 21" />
  </svg>
`;

function renderCard(p, size) {
  const price = p.price[size];
  const desc = p.desc[size];
  const features = p.features.map((f) => `<li>${f}</li>`).join('');
  const li = document.createElement('li');
  li.className = 'card pricing-card';
  li.innerHTML = `
    <header class="pricing-card__head">
      <h3 class="pricing-card__name">${p.name}</h3>
      <span class="pricing-card__icon" aria-hidden="true">${CUBE_ICON}</span>
    </header>
    <p class="pricing-card__price">
      <span class="pricing-card__amount">$${price}</span><span class="pricing-card__unit">/mo</span>
    </p>
    <p class="pricing-card__desc">${desc}</p>
    <ul class="pricing-card__features">${features}</ul>
    <a class="btn pricing-card__cta" href="#">${p.cta}</a>
  `;
  return li;
}

export function initPricing() {
  const root = document.querySelector('[data-pricing]');
  if (!root) return;

  let size = 'r12';

  function render() {
    root.innerHTML = '';
    data.forEach((p) => root.appendChild(renderCard(p, size)));
  }

  render();

  document.querySelectorAll('.pricing-toggle button').forEach((btn) => {
    btn.addEventListener('click', () => {
      size = btn.dataset.size;
      document.querySelectorAll('.pricing-toggle button').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      render();
    });
  });
}
