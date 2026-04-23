# Kế hoạch tối ưu SEO cho repo `paint-and-more-ld01`

Repo: `https://github.com/sondoquang/paint-and-more-ld01`
Site live: `https://paint-and-more-ld01.vercel.app/`

## 1) Mục tiêu

Tối ưu SEO kỹ thuật và on-page cho landing page hiện tại để:
- Google crawl và index ổn định hơn
- Tăng chất lượng hiển thị khi share Facebook/Zalo/X
- Tăng khả năng lên top với các từ khóa liên quan đến sơn an toàn cho trẻ em / phòng trẻ em / không gian sống an toàn
- Chuẩn bị nền tảng để mở rộng thêm landing page con hoặc blog sau này

---

## 2) Đánh giá ngắn hiện trạng

### Điểm đang tốt
- Site là static site build bằng Vite + Handlebars → tốt cho SEO hơn SPA thuần
- Nội dung chính có sẵn trên landing page
- Có H1 và nhiều section nội dung
- Có thông tin liên hệ/doanh nghiệp trên trang

### Điểm còn thiếu / cần sửa gấp
- Chưa có `meta description`
- Chưa có `canonical`
- Chưa có Open Graph / Twitter Card đầy đủ
- Chưa có structured data (`JSON-LD`)
- Chưa thấy `robots.txt`
- Chưa thấy `sitemap.xml`
- Một số nội dung quan trọng đang render bằng JS (FAQ / pricing / products / testimonials)
- `title` hiện còn chung chung, chưa tối ưu theo keyword
- CTA / anchor text còn khá generic
- Cần rà lại toàn bộ `alt` ảnh

---

## 3) Thứ tự ưu tiên thực hiện

### P0 — Bắt buộc làm ngay
1. Tối ưu thẻ `<head>` trong `index.html`
2. Thêm `robots.txt`
3. Thêm `sitemap.xml`
4. Thêm structured data JSON-LD
5. Đảm bảo nội dung SEO quan trọng xuất hiện trực tiếp trong HTML

### P1 — Nên làm ngay sau đó
6. Tối ưu heading structure (`H1`, `H2`, `H3`)
7. Tối ưu `alt` cho ảnh
8. Tối ưu anchor text / CTA text
9. Tối ưu performance ảnh và preload tài nguyên quan trọng

### P2 — Mở rộng để cạnh tranh SEO tốt hơn
10. Tạo thêm các landing page theo nhóm keyword
11. Viết blog/article hỗ trợ SEO dài hạn
12. Kết nối Google Search Console + submit sitemap
13. Đo Lighthouse / Core Web Vitals

---

## 4) Checklist chi tiết cần làm

## A. Tối ưu file `index.html`

### A1. Sửa lại `<title>`
**Việc cần làm:**
- Đổi title hiện tại từ kiểu chung chung sang title có keyword chính
- Title nên dài khoảng 50–60 ký tự

**Gợi ý:**
```html
<title>Sơn an toàn cho phòng em bé | OneCoat for Kids</title>
```

**Xong khi:**
- Title có chứa keyword chính
- Không quá dài
- Có brand ở cuối

---

### A2. Thêm `meta description`
**Việc cần làm:**
- Bổ sung mô tả ngắn 140–160 ký tự
- Có keyword chính + lợi ích rõ ràng

**Gợi ý:**
```html
<meta
  name="description"
  content="Giải pháp sơn an toàn cho phòng em bé, giảm mùi sơn và hỗ trợ không gian sống lành mạnh cho trẻ nhỏ."
/>
```

**Xong khi:**
- Trang có description duy nhất
- Nội dung đọc tự nhiên, không nhồi keyword

---

### A3. Thêm canonical
**Việc cần làm:**
- Thêm URL chuẩn cho trang chủ

**Gợi ý:**
```html
<link rel="canonical" href="https://paint-and-more-ld01.vercel.app/" />
```

**Xong khi:**
- Chỉ có 1 canonical hợp lệ
- Dùng đúng domain production

---

### A4. Thêm Open Graph + Twitter Card
**Việc cần làm:**
- Tạo meta cho preview khi share social
- Chuẩn bị 1 ảnh `og-image.jpg`

**Gợi ý:**
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Sơn an toàn cho phòng em bé | OneCoat for Kids" />
<meta property="og:description" content="Giải pháp sơn an toàn cho phòng em bé, giảm mùi sơn và hỗ trợ không gian sống lành mạnh cho trẻ nhỏ." />
<meta property="og:url" content="https://paint-and-more-ld01.vercel.app/" />
<meta property="og:image" content="https://paint-and-more-ld01.vercel.app/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sơn an toàn cho phòng em bé | OneCoat for Kids" />
<meta name="twitter:description" content="Giải pháp sơn an toàn cho phòng em bé, giảm mùi sơn và hỗ trợ không gian sống lành mạnh cho trẻ nhỏ." />
<meta name="twitter:image" content="https://paint-and-more-ld01.vercel.app/og-image.jpg" />
```

**Xong khi:**
- Share link lên Facebook/Zalo hiển thị đúng tiêu đề, mô tả, ảnh
- Không bị thiếu ảnh preview

---

### A5. Thêm `meta robots`
**Việc cần làm:**
- Khai báo index/follow rõ ràng

**Gợi ý:**
```html
<meta name="robots" content="index, follow" />
```

---

## B. Thêm structured data (JSON-LD)

### B1. Thêm `Organization` hoặc `LocalBusiness`
**Việc cần làm:**
- Dùng thông tin doanh nghiệp đang có trên site để tạo schema
- Đặt trong `<head>` hoặc cuối `<body>`

**Gợi ý:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OneCoat for Kids",
  "url": "https://paint-and-more-ld01.vercel.app/",
  "email": "hello@onecoatforkids.vn",
  "telephone": "+84-28-3822-5555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Đường Nguyễn Huệ, Quận 1",
    "addressLocality": "Hồ Chí Minh",
    "addressCountry": "VN"
  }
}
</script>
```

**Xong khi:**
- JSON hợp lệ
- Dữ liệu khớp với nội dung hiển thị trên site

---

### B2. Thêm `FAQPage` nếu phần FAQ ổn định
**Việc cần làm:**
- Nếu FAQ là nội dung cố định, thêm schema FAQ
- Chỉ thêm khi câu hỏi và trả lời hiện rõ cho người dùng

**Gợi ý cấu trúc:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Sơn này có an toàn cho phòng trẻ em không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
</script>
```

---

## C. Tạo file SEO technical trong `public/`

### C1. Tạo `public/robots.txt`
**Nội dung đề xuất:**
```txt
User-agent: *
Allow: /

Sitemap: https://paint-and-more-ld01.vercel.app/sitemap.xml
```

**Xong khi:**
- Truy cập `/robots.txt` được trên production

---

### C2. Tạo `public/sitemap.xml`
**Nội dung đề xuất:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://paint-and-more-ld01.vercel.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Xong khi:**
- Truy cập `/sitemap.xml` được
- Submit được vào Google Search Console

---

## D. Xử lý nội dung đang render bằng JavaScript

Hiện các phần như FAQ / pricing / products / testimonials đang có dấu hiệu render bằng JS.

### D1. Đưa nội dung SEO quan trọng về HTML tĩnh nếu có thể
**Ưu tiên các section sau:**
- FAQ
- Product highlights
- Pricing summary
- Testimonial nổi bật

**Việc cần làm:**
- Nếu dữ liệu hiện đang nằm trong JSON rồi render client-side, cân nhắc pre-render ngay lúc build
- Hoặc chuyển những nội dung quan trọng sang partial Handlebars để xuất HTML sẵn

**Mục tiêu:**
- Khi `View Source`, vẫn thấy text chính của các section quan trọng

**Xong khi:**
- Nội dung quan trọng không phụ thuộc hoàn toàn vào JS mới hiển thị

---

## E. Tối ưu heading structure

### E1. Đảm bảo chỉ có 1 H1
**Việc cần làm:**
- Giữ 1 H1 duy nhất cho chủ đề chính của trang
- Các section sau dùng H2, H3 theo cấp bậc logic

### E2. Viết heading có keyword tự nhiên
**Ví dụ hướng tối ưu:**
- H1: Sơn an toàn cho phòng em bé
- H2: Vì sao cần giảm VOC trong phòng trẻ nhỏ
- H2: Giải pháp sơn an toàn từ OneCoat for Kids
- H2: Câu hỏi thường gặp về sơn phòng trẻ em

**Xong khi:**
- Heading rõ nghĩa
- Không dùng heading chỉ để trang trí

---

## F. Tối ưu ảnh

### F1. Thay toàn bộ placeholder bằng ảnh thật
**Việc cần làm:**
- Thay `placeholder.svg` hoặc ảnh tạm bằng ảnh thật từ thiết kế
- Dùng ảnh có đúng ngữ cảnh sản phẩm / trẻ em / không gian phòng

### F2. Bổ sung `alt`
**Ví dụ tốt:**
```html
<img src="/img/room-safe-paint.jpg" alt="Phòng em bé với giải pháp sơn an toàn ít mùi" />
```

**Không nên:**
```html
alt="image"
alt="banner"
```

### F3. Nén ảnh và dùng định dạng phù hợp
**Việc cần làm:**
- Ưu tiên `.webp`
- Resize đúng kích thước hiển thị
- Không để ảnh quá nặng

**Xong khi:**
- Không còn ảnh placeholder
- Tất cả ảnh chính có `alt`
- LCP image tối ưu tốt hơn

---

## G. Tối ưu CTA và internal links

### G1. Đổi anchor text chung chung
**Hiện trạng cần tránh:**
- “Xem”
- “Đọc thêm”
- “Khám phá” nếu đứng một mình

**Đổi thành cụ thể hơn:**
- “Xem giải pháp sơn an toàn cho phòng bé”
- “Tìm hiểu bảng giá dịch vụ”
- “Đọc câu hỏi thường gặp về sơn cho trẻ em”

### G2. Thêm liên kết nội bộ dạng anchor
**Ví dụ:**
- Hero → `#products`
- Hero → `#faq`
- Footer → `#contact`

**Xong khi:**
- Link text nói rõ nội dung đích
- Điều hướng trong trang tốt hơn

---

## H. Tối ưu hiệu năng liên quan SEO

### H1. Kiểm tra Core Web Vitals
**Cần đo:**
- LCP
- CLS
- INP

### H2. Các việc nên làm
- Preload asset quan trọng nếu cần
- Giảm font load thừa
- Tránh ảnh hero quá nặng
- Minify CSS/JS
- Chỉ load script cần thiết

### H3. Kiểm tra bằng công cụ
- Lighthouse trong Chrome DevTools
- PageSpeed Insights
- Search Console sau khi submit site

**Mục tiêu:**
- Performance mobile tốt hơn
- SEO score kỹ thuật cao hơn

---

## I. Mở rộng content để có cơ hội lên top tốt hơn

Landing page đơn có thể index tốt, nhưng để cạnh tranh top lâu dài nên mở rộng thêm các trang nội dung.

### I1. Tạo landing page theo nhóm keyword
**Gợi ý:**
- `/son-an-toan-cho-phong-em-be`
- `/giam-mui-son-trong-phong-tre-em`
- `/giai-phap-son-it-voc`

### I2. Tạo blog hỗ trợ SEO
**Gợi ý chủ đề:**
- Sơn an toàn cho trẻ em là gì?
- VOC là gì và vì sao quan trọng với phòng trẻ nhỏ?
- Cách chọn màu sơn cho phòng em bé an toàn và dễ chịu
- Cách giảm mùi sơn sau khi hoàn thiện phòng trẻ em

**Lưu ý:**
- Mỗi bài có title/meta/canonical riêng
- Có liên kết quay về landing page chính

---

## 5) Danh sách file dự kiến cần sửa

### Sửa file hiện có
- `index.html`
- các partial chứa heading / CTA / ảnh
- các file JS render section nếu muốn chuyển sang pre-render

### Thêm file mới
- `public/robots.txt`
- `public/sitemap.xml`
- `public/og-image.jpg` hoặc `public/og-image.png`

### Có thể thêm sau
- `public/site.webmanifest`
- trang nội dung mới nếu mở rộng SEO

---

## 6) Đề xuất keyword ban đầu

### Keyword chính
- sơn an toàn cho phòng em bé
- sơn an toàn cho trẻ em
- sơn ít VOC cho phòng trẻ em

### Keyword phụ
- giảm mùi sơn phòng trẻ em
- sơn phòng em bé an toàn
- giải pháp sơn cho không gian trẻ nhỏ

**Lưu ý:**
- Cần chọn 1 keyword chính cho trang chủ
- Không nên nhồi nhiều keyword cạnh tranh ngang nhau vào cùng 1 trang

---

## 7) Definition of Done

Task được xem là hoàn tất khi:

- [ ] `index.html` có title, meta description, canonical, robots
- [ ] Có Open Graph + Twitter Card đầy đủ
- [ ] Có file `robots.txt`
- [ ] Có file `sitemap.xml`
- [ ] Có JSON-LD hợp lệ
- [ ] Nội dung SEO quan trọng hiện diện trực tiếp trong HTML
- [ ] Ảnh chính có `alt` đúng nghĩa
- [ ] CTA text rõ ràng, không generic
- [ ] Site được submit lên Google Search Console
- [ ] Lighthouse SEO đạt mức tốt

---

## 8) Gợi ý triển khai theo ngày

### Buổi 1
- Sửa `head` trong `index.html`
- Tạo `robots.txt`
- Tạo `sitemap.xml`
- Tạo `og-image`

### Buổi 2
- Thêm JSON-LD
- Rà heading / alt / CTA
- Đưa FAQ quan trọng về HTML tĩnh

### Buổi 3
- Audit Lighthouse
- Submit Search Console
- Lên kế hoạch mở rộng keyword và landing page con

---

## 9) Ghi chú quan trọng

- Vercel không phải vấn đề. Stack hiện tại hoàn toàn có thể SEO tốt.
- Muốn lên top không chỉ cần technical SEO mà còn cần:
  - content đủ tốt
  - keyword strategy đúng
  - backlink / brand signal về sau
- Với repo hiện tại, nên ưu tiên hoàn thiện technical SEO trước, sau đó mới mở rộng content.
