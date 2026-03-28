const fs = require('fs');

let html = fs.readFileSync('d:/code/In Action/dropship-mn/products/baby-chair/index.html', 'utf8');

// 1. Remove all HTML comments (e.g. <!-- Header -->)
html = html.replace(/<!--[\s\S]*?-->\n?/g, '');

// 2. Replace the gallery placeholders with a single main image
const galleryRegex = /<div class="gallery" id="gallery">[\s\S]*?<div class="gallery-status-note">.*?<\/div>/;
const galleryReplacement = `<div class="gallery" id="gallery">
    <div class="gallery-item" style="flex: 0 0 100%; width: 100%; aspect-ratio: 1/1;">
      <img src="/baby-chair/img_hero.jpg" alt="Олон үйлдэлт хүүхдийн сандал" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
  </div>`;

html = html.replace(galleryRegex, galleryReplacement);

// 3. Remove the mode-placeholder-grid section since the user requested removing "every other mock image, and placeholders."
const modePlaceholderRegex = /<section class="desc-section" style="overflow: hidden; padding-bottom: 16px;">[\s\S]*?<\/section>/;
html = html.replace(modePlaceholderRegex, '');

fs.writeFileSync('d:/code/In Action/dropship-mn/products/baby-chair/index.html', html);
console.log('Cleanup complete!');
