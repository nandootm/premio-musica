// Reproducir música automáticamente
window.addEventListener('load', () => {
  const audio = document.getElementById('bg-audio');
  const playAudio = () => {
    audio.play().catch(() => {
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  };
  setTimeout(playAudio, 50);
});

// Letras flotantes sincronizadas
const lyrics = [
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

const lyricsContainer = document.getElementById('lyrics-container');
let i = 0;
setInterval(() => {
  if (i < lyrics.length) {
    const lyricEl = document.createElement('div');
    lyricEl.className = 'lyric';
    lyricEl.textContent = lyrics[i];
    lyricEl.style.top = `${Math.random() * 90}%`;
    lyricEl.style.left = `${Math.random() * 90}%`;
    lyricsContainer.appendChild(lyricEl);
    setTimeout(() => lyricEl.remove(), 10000);
    i++;
  }
}, 4000);

// Partículas estilo estrellas viajando
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fill();
    star.x += star.dx;
    star.y += star.dy;
    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Botón secreto y pantalla de premio
const secretButton = document.getElementById('secret-button');
const rewardScreen = document.getElementById('reward-screen');

secretButton.addEventListener('click', () => {
  rewardScreen.style.display = 'flex';
});
