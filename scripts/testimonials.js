import data from '../data/testimonials.json';

function star(filled) {
  return filled ? '★' : '☆';
}

function renderCard(t) {
  const stars = Array.from({ length: 5 }, (_, i) => star(i < t.rating)).join('');
  const li = document.createElement('li');
  li.className = 'testimonial-card';
  li.innerHTML = `
    <span class="testimonial-stars" aria-label="${t.rating}/5 sao">${stars}</span>
    <p class="testimonial-quote">${t.quote}</p>
    <div class="testimonial-author">
      <span class="testimonial-avatar" aria-hidden="true"></span>
      <span>
        <span class="testimonial-name">${t.name}</span><br />
        <span class="testimonial-role">${t.role}</span>
      </span>
    </div>
  `;
  return li;
}

export function initTestimonials() {
  const track = document.querySelector('[data-testimonials]');
  const prev = document.querySelector('[data-testimonial-prev]');
  const next = document.querySelector('[data-testimonial-next]');
  if (!track) return;

  if (!track.children.length) {
    data.forEach((t) => track.appendChild(renderCard(t)));
  }

  let index = 0;

  function visible() {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1024) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, data.length - visible());
  }

  function update() {
    const card = track.querySelector('.testimonial-card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
    const step = card.getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-index * step}px)`;
    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index >= maxIndex();
  }

  prev?.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    update();
  });
  next?.addEventListener('click', () => {
    index = Math.min(maxIndex(), index + 1);
    update();
  });

  window.addEventListener('resize', () => {
    index = Math.min(index, maxIndex());
    update();
  });

  update();
}
