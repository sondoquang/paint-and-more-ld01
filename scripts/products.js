import data from '../data/products.json';

function renderCard(p) {
  const li = document.createElement('li');
  li.className = 'card product-card';
  li.innerHTML = `
    <div class="card__media placeholder-img" style="--img-ratio: 4/3" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M3 17 L9 12 L14 15 L21 9" />
      </svg>
    </div>
    <h3 class="card__title">${p.name}${p.tag ? ` <span class="tag">${p.tag}</span>` : ''}</h3>
    <p class="card__desc">${p.desc}</p>
    <p class="product-card__price">${p.price}</p>
    <a class="card__link" href="${p.href || '#san-pham-son-an-toan'}">${p.cta || 'Xem chi tiết'}</a>
  `;
  return li;
}

export function initProducts() {
  const root = document.querySelector('[data-products]');
  if (!root) return;
  if (root.children.length) return;
  data.forEach((p) => root.appendChild(renderCard(p)));
}
