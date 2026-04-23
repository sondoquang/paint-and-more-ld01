export function initProductDetail() {
  const root = document.querySelector('[data-product]');
  if (!root) return;

  const qtyInput = root.querySelector('.product-qty__input');
  root.querySelectorAll('.product-qty__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const delta = Number(btn.dataset.qty) || 0;
      const current = Number(qtyInput.value) || 1;
      qtyInput.value = String(Math.max(1, current + delta));
    });
  });

  root.querySelectorAll('.product-gallery__thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.product-gallery__thumb').forEach((t) => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
    });
  });
}
