
// Shared Logic
export function initGallery() {
  const g = document.getElementById('gallery');
  const ds = document.querySelectorAll('#dots span');
  if(!g || !ds.length) return;
  let galleryTicking = false;
  g.addEventListener('scroll', () => {
    if (!galleryTicking) {
      requestAnimationFrame(() => {
        const i = Math.round(g.scrollLeft / g.clientWidth);
        ds.forEach((d, j) => d.classList.toggle('active', j === i));
        galleryTicking = false;
      });
      galleryTicking = true;
    }
  });
}

export function initTiers() {
  document.querySelectorAll('.tier').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.tier').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      const q = el.dataset.qty;
      const t = document.getElementById('ftier');
      if (t) t.value = q;
    });
  });
}

export function initViewers() {
  const viewerEl = document.querySelector('.urgency b');
  if (!viewerEl) return;
  function updateViewers() {
    viewerEl.textContent = (28 + Math.floor(Math.random() * 30)) + ' хүн';
  }
  setInterval(updateViewers, 12000 + Math.random() * 8000);
}

window.copyBank = function() {
  const accEl = document.getElementById('bankAccount');
  if (!accEl) return;
  const acc = accEl.textContent.replace(/\s/g, '');
  const btn = document.getElementById('copyBtn');
  const originalHTML = btn.innerHTML;
  function showCopied() {
    btn.innerHTML = '<i class="hgi-stroke hgi-tick-01" style="font-size: 15px;"></i> Хуулсан';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = originalHTML; btn.classList.remove('copied'); }, 2000);
  }
  navigator.clipboard.writeText(acc).then(showCopied).catch(() => {
    const t = document.createElement('textarea');
    t.value = acc; document.body.appendChild(t); t.select();
    document.execCommand('copy'); document.body.removeChild(t);
    showCopied();
  });
};

export function initTimer() {
  const storageKey = 'timer_end_' + window.location.pathname;
  let endTime = localStorage.getItem(storageKey);

  const now = Date.now();
  if (!endTime || parseInt(endTime) < now) {
    endTime = now + 24 * 60 * 60 * 1000;
    localStorage.setItem(storageKey, endTime);
  } else {
    endTime = parseInt(endTime);
  }

  function update() {
    const remaining = Math.max(0, endTime - Date.now());
    if (remaining <= 0) {
      // Reset timer for another 24h to keep urgency
      endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(storageKey, endTime);
      return;
    }

    const totalSeconds = Math.floor(remaining / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');

    document.querySelectorAll('.timer-h, #h').forEach(el => el.textContent = h);
    document.querySelectorAll('.timer-m, #m').forEach(el => el.textContent = m);
    document.querySelectorAll('.timer-s, #s').forEach(el => el.textContent = s);
  }

  update();
  setInterval(update, 1000);
}

// Call initializations
document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initTiers();
  initViewers();
  initTimer();
});
