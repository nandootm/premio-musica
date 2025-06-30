const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('floating-lyrics');
const sunflowerButton = document.getElementById('sunflower-button');
const finalScreen = document.getElementById('final-screen');
const finalStarsCanvas = document.getElementById('final-stars');
const ctx = finalStarsCanvas.getContext('2d');

let lyrics = [
  "You're just too good to be true",
  "Can't take my eyes off you",
  "You feel like heaven to touch",
  "I wanna hold you so much",
  "At long last love has arrived",
  "And I thank God I'm alive",
  "You're just too good to be true",
  "Can't take my eyes off you",
  "Te amo, mi amor",
  "Y si eso está bien",
  "Para calentar mis noches",
  "Tal vez algún día...",
  "Now that I found you, stay",
  "Let me love you"
];

// Mostrar letras flotantes sincronizadas
function showFloatingLyric(text) {
  const el = document.createElement('div');
  el.className = 'lyric';
  el.style.top = `${Math.random() * 80 + 10}%`;
  el.style.left = `${Math.random() * 80 + 10}%`;
  el.textContent = text;
  lyricsContainer.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

// Mostrar cada verso cada 4 segundos
let i = 0;
setInterval(() => {
  if (i < lyrics.length) {
    showFloatingLyric(lyrics[i]);
    i++;
  }
}, 4000);

// Mostrar pantalla final al presionar el girasol
sunflowerButton.addEventListener('click', () => {
  finalScreen.style.display = 'block';
  startFinalStars();
});

// Estrellas animadas en la pantalla final
function startFinalStars() {
  finalStarsCanvas.width = window.innerWidth;
  finalStarsCanvas.height = window.innerHeight;
  const stars = Array.from({ length: 300 }, () => ({
    x: Math.random() * finalStarsCanvas.width,
    y: Math.random() * finalStarsCanvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
  }));

  function animate() {
    ctx.clearRect(0, 0, finalStarsCanvas.width, finalStarsCanvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      star.x += star.dx;
      star.y += star.dy;
      if (star.x < 0 || star.x > finalStarsCanvas.width) star.dx *= -1;
      if (star.y < 0 || star.y > finalStarsCanvas.height) star.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

