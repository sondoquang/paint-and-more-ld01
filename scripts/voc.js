import data from '../data/voc.json';

const MEDIA_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M3 17 L9 12 L14 15 L21 9" />
  </svg>
`;

function actionHtml(a) {
  const cls = a.variant === 'link' ? 'btn btn-link' : 'btn btn-outline';
  return `<a class="${cls}" href="${a.href || '#giai-phap-son-an-toan'}">${a.label}</a>`;
}

function itemHtml(item, isActive) {
  const actions = (item.actions || []).map(actionHtml).join('');
  return `
    <article class="voc-item${isActive ? ' is-active' : ''}" data-voc-item="${item.id}">
      <div class="section-2col__body">
        <span class="section-2col__eyebrow">${item.eyebrow}</span>
        <h3 class="section-2col__title">${item.title}</h3>
        <p class="section-2col__desc">${item.desc}</p>
        <div class="section-2col__actions">${actions}</div>
      </div>
      <div class="section-2col__media">
        <div class="placeholder-img" aria-hidden="true">${MEDIA_SVG}</div>
      </div>
    </article>
  `;
}

export function initVoc() {
  const tabsRoot = document.querySelector('[data-voc-tabs]');
  const panel = document.querySelector('[data-voc-panel]');
  if (!tabsRoot || !panel || !data.length) return;

  const activeTab = tabsRoot.querySelector('.voc-tab.is-active');
  let activeId = activeTab?.dataset.vocTab || data[0].id;

  if (!tabsRoot.children.length) {
    tabsRoot.innerHTML = data
      .map(
        (d) => `
          <button type="button" role="tab"
            class="voc-tab${d.id === activeId ? ' is-active' : ''}"
            data-voc-tab="${d.id}"
            aria-selected="${d.id === activeId ? 'true' : 'false'}">${d.tab}</button>
        `
      )
      .join('');
  }

  if (!panel.children.length) {
    panel.innerHTML = data.map((d) => itemHtml(d, d.id === activeId)).join('');
  }

  function activate(id) {
    if (!data.find((d) => d.id === id)) return;
    activeId = id;
    tabsRoot.querySelectorAll('.voc-tab').forEach((btn) => {
      const on = btn.dataset.vocTab === id;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panel.querySelectorAll('.voc-item').forEach((el) => {
      const on = el.dataset.vocItem === id;
      el.classList.toggle('is-active', on);
      el.hidden = !on;
    });
  }

  tabsRoot.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-voc-tab]');
    if (!btn) return;
    activate(btn.dataset.vocTab);
  });
}
