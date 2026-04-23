# OneCoat for Kids — Website

Static marketing site built with Vite + Handlebars partials. Vanilla CSS/JS, không framework.

## Chạy dev

```bash
npm install     # lần đầu
npm run dev     # http://localhost:5173
```

Sửa partial trong `partials/` → HMR tự reload nhờ `reloadOnPartialChange`.

## Build production

```bash
npm run build     # output vào dist/
npm run preview   # preview dist/ tại local
```

**Deploy:** chỉ publish thư mục `dist/`, không publish source.

## Cấu trúc

```
./
├── index.html               # shell, dùng {{> partial }}
├── vite.config.js           # Vite + vite-plugin-handlebars
├── partials/
│   ├── header.html
│   ├── footer.html          # bao gồm {{> sections/contact }}
│   └── sections/
│       ├── hero.html
│       ├── timeline.html
│       ├── dangers.html
│       ├── voc.html
│       ├── onecoat-intro.html
│       ├── health.html
│       ├── lungs.html
│       ├── creativity.html
│       ├── world-choices.html
│       ├── japandi.html
│       ├── investment.html
│       ├── product-detail.html
│       ├── quote.html
│       ├── start-journey.html
│       ├── testimonials.html        # skeleton — JS render
│       ├── pricing.html             # skeleton — JS render
│       ├── products.html            # skeleton — JS render
│       ├── stats.html
│       ├── faq.html                 # skeleton — JS render
│       └── contact.html
├── styles/
│   ├── main.css             # entry, @imports tất cả
│   ├── tokens.css           # CSS vars (màu, font, spacing)
│   ├── base.css             # reset + utilities
│   ├── primitives.css       # .section, .section-head, .tag, .placeholder-img, .grid-*
│   ├── header.css, footer.css
│   └── sections/
│       ├── hero.css
│       ├── section-2col.css         # share: voc, health, lungs, creativity, japandi, investment
│       ├── section-cards.css        # share: world-choices, pricing, products
│       ├── section-banner.css       # share: quote, journey, stats
│       ├── timeline.css, dangers.css, product-detail.css,
│       ├── testimonials.css, faq.css, contact.css
├── scripts/
│   ├── main.js              # entry, import + init
│   ├── header.js            # mega menu + mobile nav
│   ├── timeline.js          # tab switcher
│   ├── testimonials.js      # carousel + render JSON
│   ├── faq.js               # <details> accordion + render JSON
│   ├── pricing.js           # tier cards + monthly/yearly toggle
│   ├── products.js          # product cards render
│   └── product.js           # color/size/qty state
├── data/
│   ├── testimonials.json
│   ├── pricing.json
│   ├── products.json
│   └── faq.json
└── public/
    └── img/
        ├── logo-paint-and-more.svg
        └── placeholder.svg
```

## Chỉnh design tokens

Sửa [styles/tokens.css](styles/tokens.css) — màu, font, spacing, container đều trong `:root`.

## Thêm/bớt testimonial, product, FAQ, pricing

Sửa JSON tương ứng trong `data/`. Nội dung import làm ES module (Vite bundle + fingerprint),
reload trong dev, rebuild cho production.

## Thay logo / font

- Logo SVG trong `public/img/logo-paint-and-more.svg`. Tham chiếu bằng `/img/logo-paint-and-more.svg`.
- Fonts load từ Google Fonts (Roboto + Pacifico) trong `<head>` của `index.html`.

## TODO

- [ ] Thay `placeholder.svg` bằng ảnh thật từ thiết kế
- [ ] Backend / service cho form subscribe & email capture
- [ ] Page thứ 2 (nếu cần)
- [ ] Favicon + og-image
