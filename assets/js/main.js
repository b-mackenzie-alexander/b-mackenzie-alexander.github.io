// =============================
// main.js — Diagnostic Version
// =============================

console.log('[main.js] Script loaded');

// 🧠 Hero typewriter animation
function runHeroAnimation() {
  console.log('[runHeroAnimation] Initializing');
  const target = document.getElementById('intro-text');
  if (!target) {
    console.warn('[runHeroAnimation] #intro-text not found');
    return;
  }

  target.textContent = '';
  const intro = [
    'Initializing secure node...',
    'Authenticating user: Maestra',
    'Loading portfolio protocol...',
    'Access granted.\nWelcome to my digital domain.'
  ];

  let line = 0;
  let char = 0;

  function typeLine() {
    if (line < intro.length) {
      if (char < intro[line].length) {
        target.textContent += intro[line][char];
        char++;
        setTimeout(typeLine, 50);
      } else {
        target.textContent += '\n';
        line++;
        char = 0;
        setTimeout(typeLine, 500);
      }
    }
  }

  typeLine();
}

// 🧠 Binary background with glitch diagnostics
function initBinaryBackground() {
  console.log('[initBinaryBackground] Initializing');
  const bgContainer = document.querySelector('.binary-bg');
  if (!bgContainer) {
    console.warn('[initBinaryBackground] .binary-bg not found');
    return;
  }

  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '-1',
    backgroundColor: 'var(--black)'
  });
  bgContainer.appendChild(canvas);
  console.log('[initBinaryBackground] Canvas appended');

  const ctx = canvas.getContext('2d');
  const fontSize = 14;
  const binaryChars = '01';

  const fontFamily = getComputedStyle(document.documentElement)
    .getPropertyValue('--font-terminal')
    .trim() || 'monospace';
  const binaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--deep-red')
    .trim() || '#ff4c4c';

  console.log(`[initBinaryBackground] Font: ${fontFamily}`);
  console.log(`[initBinaryBackground] Color: ${binaryColor}`);

  let columns, drops;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
    console.log(`[initBinaryBackground] Canvas resized: ${canvas.width}x${canvas.height}`);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let glitchActive = false;
  let glitchTimer = 0;

  function triggerGlitch() {
    glitchActive = true;
    glitchTimer = 5;
    console.log('[initBinaryBackground] Glitch triggered');
  }

  function draw() {
    ctx.fillStyle = glitchActive ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = glitchActive ? '#ff4c4c' : binaryColor;
    ctx.font = `${fontSize}px ${fontFamily}`;

    for (let i = 0; i < drops.length; i++) {
      const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
      let x = i * fontSize;
      let y = drops[i] * fontSize;
      if (glitchActive) x += (Math.random() - 0.5) * 4;
      ctx.fillText(text, x, y);
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }

    if (glitchActive) {
      glitchTimer--;
      if (glitchTimer <= 0) {
        glitchActive = false;
        console.log('[initBinaryBackground] Glitch ended');
      }
    } else if (Math.random() > 0.995) {
      triggerGlitch();
    }
  }

  setInterval(draw, 50);
  console.log('[initBinaryBackground] Draw loop started');
}

// 🧠 Contact form diagnostics
function setupContactForm() {
  console.log('[setupContactForm] Initializing');
  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');
  if (!form || !response) {
    console.warn('[setupContactForm] Form or response element missing');
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value.trim();
    const message = form.message.value.trim();
    if (!username || !message) {
      response.textContent = 'Error: Missing username or message.';
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    response.textContent = 'Transmitting...';
    setTimeout(() => {
      response.textContent = `Message from ${username} received securely.`;
      form.reset();
      if (submitBtn) submitBtn.disabled = false;
    }, 1000);
  });
}

// 🧠 Decrypt button diagnostics
function setupDecryptButton() {
  console.log('[setupDecryptButton] Initializing');
  const btn = document.getElementById('decrypt-btn');
  const msg = document.getElementById('decrypted-message');
  if (!btn || !msg) {
    console.warn('[setupDecryptButton] Button or message element missing');
    return;
  }

  btn.addEventListener('click', () => {
    const isHidden = msg.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', !isHidden);
  });
}

// =============================
// Initialize on DOM ready
// =============================
document.addEventListener('DOMContentLoaded', () => {
  console.log('[main.js] DOMContentLoaded fired');
  [
    runHeroAnimation,
    initBinaryBackground,
    setupContactForm,
    setupDecryptButton
  ].forEach(fn => {
    try {
      console.log(`[main.js] Running ${fn.name}`);
      fn();
    } catch (e) {
      console.error(`[main.js] Error in ${fn.name}:`, e);
    }
  });
});