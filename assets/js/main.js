// =============================
// main.js — Safe, Modular Setup
// =============================

// 🧠 Hero typewriter animation (homepage only)
function runHeroAnimation() {
  const target = document.getElementById('intro-text');
  if (!target) return; // Exit if not on homepage

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

// 🧠 Binary background initialization (runs everywhere)
function initBinaryBackground() {
  const bg = document.querySelector('.binary-bg');
  if (!bg) return; // Exit if no background element

  // If your binary background is pure CSS, this is enough.
  // If you want to dynamically generate binary characters, you can extend here.
  // Example: animate opacity or add extra effects later.
}

// 🧠 Contact form handler (contact page only)
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');
  if (!form || !response) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value.trim();
    const message = form.message.value.trim();

    if (!username || !message) {
      response.textContent = 'Error: Missing username or message.';
      return;
    }

    // Simulate sending
    response.textContent = 'Transmitting...';
    setTimeout(() => {
      response.textContent = `Message from ${username} received securely.`;
      form.reset();
    }, 1000);
  });
}

// 🧠 Decrypt button handler (wherever present)
function setupDecryptButton() {
  const btn = document.getElementById('decrypt-btn');
  const msg = document.getElementById('decrypted-message');
  if (!btn || !msg) return;

  btn.addEventListener('click', () => {
    msg.classList.toggle('hidden');
  });
}

// =============================
// Initialize on DOM ready
// =============================
document.addEventListener('DOMContentLoaded', () => {
  runHeroAnimation();
  initBinaryBackground();
  setupContactForm();
  setupDecryptButton();
});