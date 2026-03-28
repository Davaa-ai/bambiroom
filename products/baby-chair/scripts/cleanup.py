import re

try:
    with open('d:/code/In Action/dropship-mn/products/baby-chair/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Remove HTML comments
    html = re.sub(r'<!--[\s\S]*?-->\n?', '', html)

    # 2. Replace gallery
    gallery_regex = r'<div class="gallery" id="gallery">[\s\S]*?<div class="gallery-status-note">.*?</div>'
    gallery_replacement = '''<div class="gallery" id="gallery">
    <div class="gallery-item" style="flex: 0 0 100%; width: 100%; aspect-ratio: 1/1;">
      <img src="/baby-chair/img_hero.jpg" alt="Олон үйлдэлт хүүхдийн сандал" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
  </div>'''
    html = re.sub(gallery_regex, gallery_replacement, html, flags=re.DOTALL)

    # 3. Remove the mode-placeholder section ("3 Modes Infographic")
    mode_regex = r'<section class="desc-section"[\s\S]*?</section>'
    html = re.sub(mode_regex, '', html, flags=re.DOTALL)

    with open('d:/code/In Action/dropship-mn/products/baby-chair/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Cleanup successful")
except Exception as e:
    print(f"Error: {e}")
