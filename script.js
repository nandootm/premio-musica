const audio = document.getElementById('music');
const pauseBtn = document.getElementById('pauseBtn');
const containerEn = document.getElementById('lyrics-container-en');
const containerEs = document.getElementById('lyrics-container-es');
const sunflowerContainer = document.getElementById('sunflowers');

const lyricsEn = `
You're just too good to be true
Can't take my eyes off of you
You'd be like Heaven to touch
I wanna hold you so much
At long last, love has arrived
And I thank God I'm alive
You're just too good to be true
Can't take my eyes off of you
`.trim().split('\n');

const lyricsEs = `
Eres demasiado perfecta para ser verdad
No puedo apartar mis ojos de ti
Serías como el cielo al tocar
Quiero abrazarte tanto
Por fin el amor ha llegado
Y doy gracias a Dios por estar vivo
Eres demasiado perfecta para ser verdad
No puedo apartar mis ojos de ti
`.trim().split('\n');

let index = 0;
function showLyrics() {
  if (index >= lyricsEn.length) return;

  const lineEn = document.createElement('div');
  lineEn.className = 'lyric-line';
  lineEn.textContent = lyricsEn[index];
  lineEn.style.top = `${Math.random() * 70 + 10}%`;
  lineEn.style.left = `${Math.random() * 70 + 10}%`;

  const lineEs = document.createElement('div');
  lineEs.className = 'lyric-es';
  lineEs.textContent = lyricsEs[index];
  lineEs.style.top = `${Math.random() * 80 + 10}%`;
  lineEs.style.left = `${Math.random() * 80 + 10}%`;

  containerEn.appendChild(lineEn);
  containerEs.appendChild(lineEs);

  setTimeout(() => {
    lineEn.remove();
    lineEs.remove();
  }, 8000);

  index++;
  setTimeout(showLyrics, 4000);
}

pauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    pauseBtn.textContent = '⏸';
  } else {
    audio.pause();
    pauseBtn.textContent = '▶️';
  }
});

// Sunflower logic
let bounceCount = 0;
let sunflowers = [];

function createSunflower(x = 100, y = 100, dx = 2, dy = 2) {
  const img = document.createElement('img');
  img.src = 'sunflower.png';
  img.className = 'sunflower';
  sunflowerContainer.appendChild(img);

  function animate() {
    const bounds = img.getBoundingClientRect();
    const w = window.innerWidth - bounds.width;
    const h = window.innerHeight - bounds.height;

    x += dx;
    y += dy;

    if (x <= 0 || x >= w) {
      dx *= -1;
      bounceCount++;
    }
    if (y <= 0 || y >= h) {
      dy *= -1;
      bounceCount++;
    }

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `rotate(${Date.now() % 360}deg)`;

    if (bounceCount % 6 === 0 && bounceCount !== 0 && sunflowers.length < 10) {
      const clone = createSunflower(Math.random() * w, Math.random() * h, 2 * (Math.random() - 0.5), 2 * (Math.random() - 0.5));
      sunflowers.push(clone);
      bounceCount++;
    }

    requestAnimationFrame(animate);
  }

  animate();
  return img;
}

document.addEventListener('DOMContentLoaded', () => {
  showLyrics();
  const first = createSunflower();
  sunflowers.push(first);
});
