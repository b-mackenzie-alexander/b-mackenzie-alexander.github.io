document.addEventListener('DOMContentLoaded', () => {
  const intro = [
    'Initializing secure node...',
    'Authenticating user: Maestra',
    'Loading portfolio protocol...',
    'Access granted.\nWelcome to the Databreak Network.'
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

  typeLine();
});

function generateBinaryRain() {
  const binaryBg = document.querySelector('.binary-bg');
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

document.addEventListener('DOMContentLoaded', generateBinaryRain);