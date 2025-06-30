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

const lens = document.getElementById('lens');
document.addEventListener('mousemove', e => {
  lens.style.left = `${e.clientX - 60}px`;
  lens.style.top = `${e.clientY - 60}px`;
});

const lyricsData = [
  { t: 0, text: "You're just too good to be true" },
  { t: 5, text: "Can't keep my eyes off you" },
  { t: 10, text: "You feel like heaven to touch" },
  { t: 15, text: "I wanna hold you so much" },
  { t: 20, text: "At long last love has arrived" },
  { t: 25, text: "And I thank God I'm alive" },
  { t: 30, text: "You're just too good to be true" },
  { t: 35, text: "Can't take my eyes off you" },
  { t: 40, text: "Eres demasiado buena para ser real" },
  { t: 45, text: "No puedo dejar de mirarte" },
  { t: 50, text: "Eres como tocar el cielo" },
  { t: 55, text: "Quiero abrazarte tanto" },
  { t: 60, text: "Por fin, el amor ha llegado" },
  { t: 65, text: "Y doy gracias a Dios que estoy vivo" },
  { t: 70, text: "Perdóname por la manera que te miro" },
  { t: 75, text: "No hay nada más para comparar" },
  { t: 80, text: "Es que mirarte me deja débil" },
  { t: 85, text: "No hay más palabras que decir" },
  { t: 90, text: "Pero si te sientes como me siento" },
  { t: 95, text: "Por favor, déjame saber que eso es de verdad" },
  { t: 100, text: "Te amo, mi amor" },
  { t: 105, text: "Y si eso está bien" },
  { t: 110, text: "Te necesito, mi amor" },
  { t: 115, text: "Para calentar mis noches solitarias" },
  { t: 120, text: "Créeme cuando digo" },
  { t: 125, text: "Oh, amor mío" },
  { t: 130, text: "No me decepciones, te lo ruego" },
  { t: 135, text: "Ahora que te encontré, quédate" },
  { t: 140, text: "Y déjame amarte, mi amor" },
  { t: 145, text: "Déjame amarte" },
  { t: 150, text: "You're just too good to be true" },
  { t: 155, text: "Can't take my eyes off you" },
  { t: 160, text: "I love you baby" },
  { t: 165, text: "And if it's quite all right" },
  { t: 170, text: "I need you baby" },
  { t: 175, text: "To warm the lonely nights" },
  { t: 180, text: "Oh pretty baby" },
  { t: 185, text: "Trust in me when I say" },
  { t: 190, text: "Let me love you" }
];

const audio = document.getElementById('audio');
const bgLyrics = document.getElementById('background-lyrics');

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;

  for (let i = 0; i < lyricsData.length; i++) {
    const current = lyricsData[i];
    const next = lyricsData[i + 1];
    if (currentTime >= current.t && (!next || currentTime < next.t)) {
      bgLyrics.textContent = current.text.toUpperCase();
      break;
    }
  }
});
