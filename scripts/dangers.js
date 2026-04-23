export function initDangers() {
  const root = document.querySelector('[data-dangers]');
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll('.dangers-tab'));
  const panels = Array.from(root.querySelectorAll('.dangers-panel'));

  function activate(key) {
    tabs.forEach((t) => {
      const on = t.dataset.tab === key;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach((p) => {
      const on = p.dataset.panel === key;
      p.classList.toggle('is-active', on);
      p.hidden = !on;
    });
  }

  tabs.forEach((t) => {
    t.addEventListener('click', () => activate(t.dataset.tab));
  });
}
