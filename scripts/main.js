import { initHeader } from './header.js';
import { initDangers } from './dangers.js';
import { initTestimonials } from './testimonials.js';
import { initFaq } from './faq.js';
import { initPricing } from './pricing.js';
import { initProducts } from './products.js';
import { initProductDetail } from './product.js';
import { initVoc } from './voc.js';

function boot() {
  initHeader();
  initDangers();
  initTestimonials();
  initFaq();
  initPricing();
  initProducts();
  initProductDetail();
  initVoc();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
