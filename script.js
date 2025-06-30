// === efecto estrellas viajando ===
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  });
}

function animateStars() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.z -= 2;
    if (star.z <= 0) {
      star.z = canvas.width;
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
    }
    let sx = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
    let sy = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
    let r = canvas.width / star.z;

    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${(star.x + star.y) % 360}, 100%, 80%)`;
    ctx.fill();
  }
  requestAnimationFrame(animateStars);
}
animateStars();

// === lente iluminada con el mouse ===
const lens = document.getElementById('lens');
document.addEventListener('mousemove', e => {
  lens.style.left = `${e.clientX - 60}px`;
  lens.style.top = `${e.clientY - 60}px`;
});

// === letra sincronizada ===
const lyricsData = [
  { t: 0, text: \"You're just too good to be true\" },
  { t: 5, text: \"Can't take my eyes off you\" },
  { t: 10, text: \"You'd be like heaven to touch\" },
  { t: 15, text: \"I wanna hold you so much\" },
  { t: 20, text: \"At long last love has arrived\" },
  { t: 25, text: \"And I thank God I'm alive\" },
  { t: 30, text: \"You're just too good to be true\" },
  { t: 35, text: \"Can't take my eyes off you\" },
  { t: 40, text: \"Eres demasiado buena para ser verdad\" },
  { t: 45, text: \"No puedo apartar mis ojos de ti\" },
  { t: 50, text: \"Serías como el cielo al tocarte\" },
  { t: 55, text: \"Quiero abrazarte tanto\" },
  { t: 60, text: \"Por fin ha llegado el amor\" },
  { t: 65, text: \"Y agradezco a Dios estar vivo\" },
  { t: 70, text: \"Eres demasiado buena para ser verdad\" },
  { t: 75, text: \"No puedo apartar mis ojos de ti\" }
];

const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');
const bgLyrics = document.getElementById('background-lyrics');

lyricsData.forEach((line, i) => {
  const p = document.createElement('p');
  p.textContent = line.text;
  lyricsDiv.appendChild(p);
});

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const lines = lyricsDiv.querySelectorAll('p');
  lyricsData.forEach((line, i) => {
    if (currentTime >= line.t && (!lyricsData[i + 1] || currentTime < lyricsData[i + 1].t)) {
      lines.forEach(p => p.style.opacity = 0.2);
      lines[i].style.opacity = 1;
      bgLyrics.textContent = line.text;
    }
  });
});
