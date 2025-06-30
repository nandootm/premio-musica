const audio = document.getElementById('music');
const pauseBtn = document.getElementById('pauseBtn');
const containerEn = document.getElementById('lyrics-container-en');
const containerEs = document.getElementById('lyrics-container-es');
const sunflowerContainer = document.getElementById('sunflowers');
const backgroundVideo = document.getElementById('background-video');

// Forzar video en autoplay (para navegadores con restricciones)
document.addEventListener('DOMContentLoaded', () => {
  backgroundVideo.play().catch(() => {
    document.body.addEventListener('click', () => backgroundVideo.play(), { once: true });
  });

  showLyrics();
  const first = createSunflower();
  sunflowers.push(first);
});

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

  const en = document.createElement('div');
  en.className = 'lyric-line';
  en.textContent = lyricsEn[index];
  en.style.top = `${Math.random() * 70 + 10}%`;
  en.style.left = `${Math.random() * 70 + 10}%`;

  const es = document.createElement('div');
  es.className = 'lyric-es';
  es.textContent = lyricsEs[index];
  es.style.top = `${Math.random() * 70 + 10}%`;
  es.style.left = `${Math.random() * 70 + 10}%`;

  containerEn.appendChild(en);
  containerEs.appendChild(es);

  setTimeout(() => {
    en.remove();
    es.remove();
  }, 8000);

  index++;
  setTimeout(showLyrics, 4500);
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

// 🌻 Lógica de girasoles con rebotes y duplicación inteligente
let sunflowers = [];
let totalBounces = 0;
let thresholds = [4, 10, 15, 20, 30, 45];

function createSunflower(x = 100, y = 100, dx = 2, dy = 2) {
  const img = document.createElement('img');
  img.src = 'sunflower.png';
  img.className = 'sunflower';
  sunflowerContainer.appendChild(img);

  let bounces = 0;
  let nextThresholdIndex = 0;

  function animate() {
    const bounds = img.getBoundingClientRect();
    const w = window.innerWidth - bounds.width;
    const h = window.innerHeight - bounds.height;

    let bounced = false;

    x += dx;
    y += dy;

    if (x <= 0 || x >= w) {
      dx *= -1;
      bounced = true;
    }
    if (y <= 0 || y >= h) {
      dy *= -1;
      bounced = true;
    }

    if (bounced) {
      bounces++;
      totalBounces++;

      const currentThreshold = thresholds[nextThresholdIndex];
      if ((bounces >= currentThreshold || totalBounces >= currentThreshold) && sunflowers.length < 20) {
        const clone = createSunflower(
          Math.random() * w,
          Math.random() * h,
          2 * (Math.random() - 0.5),
          2 * (Math.random() - 0.5)
        );
        sunflowers.push(clone);
        nextThresholdIndex++;
      }
    }

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `rotate(${Date.now() % 360}deg)`;

    requestAnimationFrame(animate);
  }

  animate();
  return img;
}

