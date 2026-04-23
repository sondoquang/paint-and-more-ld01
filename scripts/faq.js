import data from '../data/faq.json';

export function initFaq() {
  const root = document.querySelector('[data-faq]');
  if (!root) return;

  const fragment = document.createDocumentFragment();
  data.forEach((item, i) => {
    const details = document.createElement('details');
    details.className = 'faq-item';
    if (i === 0) details.open = true;
    details.innerHTML = `
      <summary>${item.q}</summary>
      <div class="faq-answer">${item.a}</div>
    `;
    fragment.appendChild(details);
  });
  root.appendChild(fragment);

  root.addEventListener('toggle', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLDetailsElement) || !target.open) return;
    root.querySelectorAll('details[open]').forEach((d) => {
      if (d !== target) d.open = false;
    });
  }, true);
}
