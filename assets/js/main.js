// =============================
// main.js — Safe, Modular Setup
// =============================

// 🧠 Hero typewriter animation (homepage only)
function runHeroAnimation() {
  const target = document.getElementById('intro-text');
  if (!target) return; // Exit if not on homepage

  // Clear any existing text to avoid duplicate runs
  target.textContent = '';

  const intro = [
    'Initializing secure node...',
    'Authenticating user...',
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

// 🧠 Binary background initialization with glitch flicker
function initBinaryBackground() {
  const bgContainer = document.querySelector('.binary-bg');
  if (!bgContainer) return;

  // Create and style the canvas
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

  const ctx = canvas.getContext('2d');

  // Resolve CSS font variable for canvas
  const fontFamily = getComputedStyle(document.documentElement)
    .getPropertyValue('--font-terminal')
    .trim() || 'monospace';

  const fontSize = 14;
  let columns, drops;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const binaryChars = '01';

  // Glitch state
  let glitchActive = false;
  let glitchTimer = 0;

  function triggerGlitch() {
    glitchActive = true;
    glitchTimer = 5; // frames of glitch
  }

  function draw() {
    // Fade the canvas slightly to create trailing effect
    ctx.fillStyle = glitchActive
      ? 'rgba(0, 0, 0, 0.2)' // heavier fade during glitch
      : 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = glitchActive ? '#ff4c4c' : getComputedStyle(document.documentElement).getPropertyValue('--deep-red').trim();
    ctx.font = `${fontSize}px ${fontFamily}`;

    for (let i = 0; i < drops.length; i++) {
      const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
      let x = i * fontSize;
      let y = drops[i] * fontSize;

      // Slight horizontal jitter during glitch
      if (glitchActive) {
        x += (Math.random() - 0.5) * 4;
      }

      ctx.fillText(text, x, y);

      // Reset drop to top randomly after it passes the bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    // Handle glitch timing
    if (glitchActive) {
      glitchTimer--;
      if (glitchTimer <= 0) glitchActive = false;
    } else {
      // Random chance to trigger glitch
      if (Math.random() > 0.995) {
        triggerGlitch();
      }
    }
  }

  setInterval(draw, 50);
}

// 🧠 Contact form handler (contact page only)
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');
  if (!form || !response) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value.trim();
    const message = form.message.value.trim();

    if (!username || !message) {
      response.textContent = 'Error: Missing username or message.';
      return;
    }

    // Disable button while sending
    if (submitBtn) submitBtn.disabled = true;

    response.textContent = 'Transmitting...';
    setTimeout(() => {
      response.textContent = `Message from ${username} received securely.`;
      form.reset();
      if (submitBtn) submitBtn.disabled = false;
    }, 1000);
  });
}

// 🧠 Decrypt button handler (wherever present)
function setupDecryptButton() {
  const btn = document.getElementById('decrypt-btn');
  const msg = document.getElementById('decrypted-message');
  if (!btn || !msg) return;

  btn.addEventListener('click', () => {
    const isHidden = msg.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', !isHidden);
  });
}

// =============================
// Initialize on DOM ready
// =============================
document.addEventListener('DOMContentLoaded', () => {
  [
    runHeroAnimation,
    initBinaryBackground,
    setupContactForm,
    setupDecryptButton
  ].forEach(fn => {
    try {
      fn();
    } catch (e) {
      console.error(`Error in ${fn.name}:`, e);
    }
  });
});