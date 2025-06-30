const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('floating-lyrics');
const sunflowerButton = document.getElementById('sunflower-button');
const finalScreen = document.getElementById('final-screen');
const finalStarsCanvas = document.getElementById('final-stars');
const ctx = finalStarsCanvas.getContext('2d');

// Autoplay
window.addEventListener('load', () => {
  const playAudio = () => {
    audio.play().catch(() => {
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  };
  setTimeout(playAudio, 10);
});

// Letras sincronizadas flotando
let lyrics = [
  "Eres demasiado buena para ser real / You're just too good to be true",
  "No puedo dejar de mirarte / Can't keep my eyes off you",
  "Eres como tocar el cielo / You feel like heaven to touch",
  "Quiero abrazarte tanto / I wanna hold you so much",
  "Por fin, el amor ha llegado / At long last love has arrived",
  "Y doy gracias a Dios que estoy vivo / And I thank God I'm alive",
  "Perdóname por la manera que te miro / Pardon the way that I stare",
  "No hay nada más para comparar / There's nothing else to compare",
  "Es que mirarte me deja débil / The sight of you makes me weak",
  "No hay más palabras que decir / There are no words left to speak",
  "Pero si te sientes como me siento / But if you feel like I feel",
  "Por favor, déjame saber que eso es de verdad / Please, let me know that it's real",
  "Te amo, mi amor / I love you, baby",
  "Y si eso está bien / And if it's quite all right",
  "Te necesito, mi amor / I need you, baby",
  "Para calentar mis noches solitarias / To warm the lonely nights",
  "Créeme cuando digo / Trust in me when I say",
  "Oh, amor mío / Oh, pretty baby",
  "No me decepciones, te lo ruego / Don't bring me down, I pray",
  "Ahora que te encontré, quédate / Now that I found you, stay",
  "Y déjame amarte, mi amor / And let me love you, baby",
  "Déjame amarte / Let me love you"
];

function showFloatingLyric(text) {
  const el = document.createElement('div');
  el.className = 'lyric';
  el.style.top = `${Math.random() * 90}%`;
  el.style.left = `${Math.random() * 90}%`;
  el.textContent = text;
  lyricsContainer.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

let i = 0;
setInterval(() => {
  if (i < lyrics.length) {
    showFloatingLyric(lyrics[i]);
    i++;
  }
}, 4000);

// Botón de girasol activa escena final
sunflowerButton.addEventListener('click', () => {
  finalScreen.style.display = 'block';
  startFinalStars();
});

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
