import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import handlebars from 'vite-plugin-handlebars';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const loadJson = (file) =>
  JSON.parse(readFileSync(resolve(__dirname, file), 'utf8'));

const faq = loadJson('data/faq.json');
const pricing = loadJson('data/pricing.json');
const products = loadJson('data/products.json');
const testimonials = loadJson('data/testimonials.json').map((item) => ({
  ...item,
  stars: `${'★'.repeat(item.rating)}${'☆'.repeat(Math.max(0, 5 - item.rating))}`,
}));
const voc = loadJson('data/voc.json').map((item, index) => ({
  ...item,
  isActive: index === 0,
  actions: (item.actions || []).map((action) => ({
    ...action,
    className: action.variant === 'link' ? 'btn btn-link' : 'btn btn-outline',
  })),
}));

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      reloadOnPartialChange: true,
      context: {
        faq,
        pricing,
        products,
        testimonials,
        voc,
      },
    }),
  ],
  server: {
    port: 5173,
    open: true,
  },
};
