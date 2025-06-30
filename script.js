const sunflower = document.getElementById('sunflower');
const audio = document.getElementById('music');
const pauseBtn = document.getElementById('pauseBtn');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsContainerEs = document.getElementById('lyrics-container-es');

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
  lineEn.className = 'lyric-line fade';
  lineEn.textContent = lyricsEn[index];
  lineEn.style.top = `${Math.random() * 70 + 10}%`;
  lineEn.style.left = `${Math.random() * 80 + 10}%`;

  const lineEs = document.createElement('div');
  lineEs.className = 'lyric-line-es spin';
  lineEs.textContent = lyricsEs[index];
  lineEs.style.top = `${Math.random() * 80 + 10}%`;
  lineEs.style.left = `${Math.random() * 90 + 5}%`;

  lyricsContainer.appendChild(lineEn);
  lyricsContainerEs.appendChild(lineEs);

  setTimeout(() => {
    lineEn.remove();
    lineEs.remove();
  }, 7000);

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

// Girasol rebota y gira
let x = 100, y = 100, dx = 1.5, dy = 1.5;

function moveSunflower() {
  const bounds = sunflower.getBoundingClientRect();
  const w = window.innerWidth - bounds.width;
  const h = window.innerHeight - bounds.height;

  x += dx;
  y += dy;

  if (x <= 0 || x >= w) dx *= -1;
  if (y <= 0 || y >= h) dy *= -1;

  sunflower.style.left = `${x}px`;
  sunflower.style.top = `${y}px`;
  sunflower.style.transform = `rotate(${Date.now() / 10 % 360}deg)`;

  requestAnimationFrame(moveSunflower);
}

document.addEventListener('DOMContentLoaded', () => {
  showLyrics();
  moveSunflower();
  document.querySelector('.title').classList.add('fade-out');
});
