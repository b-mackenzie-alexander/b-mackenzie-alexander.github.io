document.addEventListener('DOMContentLoaded', () => {
  runHeroAnimation();
  generateBinaryRain();
  setupContactForm();
  setupDecryptButton();
});

// 🧠 Hero typewriter animation
function runHeroAnimation() {
  const intro = [
    'Initializing secure node...',
    'Authenticating user: Maestra',
    'Loading portfolio protocol...',
    'Access granted.\nWelcome to my digital domain.'
  ];

  const target = document.getElementById('intro-text');
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

  if (target) typeLine();
}

// 🧠 Binary rain background
function generateBinaryRain() {
  const binaryBg = document.querySelector('.binary-bg');
  if (!binaryBg) return;

  for (let i = 0; i < 100; i++) {
    const bit = document.createElement('span');
    bit.textContent = Math.random() > 0.5 ? '1' : '0';
    bit.style.position = 'absolute';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.top = `${Math.random() * 100}%`;
    bit.style.color = '#8B0000';
    bit.style.opacity = '0.1';
    bit.style.fontSize = '0.8rem';
    binaryBg.appendChild(bit);
  }
}

// 🧠 Contact form transmission logic
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');

  if (!form || !response) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    response.textContent = '>> transmission received. Awaiting response...';
  });
}

// 🧠 Footer decrypt easter egg
function setupDecryptButton() {
  const button = document.getElementById('decrypt-btn');
  const message = document.getElementById('decrypted-message');

  if (!button || !message) return;

  button.addEventListener('click', () => {
    message.textContent = '>> 4265617472696365204D61636B656E7A696520416C6578616E646572';
    message.classList.remove('hidden');
  });
}