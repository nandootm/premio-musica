// Canvas psicodélico
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 4 + 2;
    this.speed = Math.random() * 2 + 1;
    this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    this.angle = Math.random() * Math.PI * 2;
  }
  update() {
    this.y -= this.speed;
    this.x += Math.sin(this.angle);
    if (this.y < -10) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
for (let i = 0; i < 150; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// Letras sincronizadas
const lyricsData = [
  { t: 0, text: "You're just too good to be true" },
  { t: 5, text: "Can't take my eyes off you" },
  { t: 10, text: "You'd be like heaven to touch" },
  { t: 15, text: "I wanna hold you so much" },
  { t: 20, text: "At long last love has arrived" },
  { t: 25, text: "And I thank God I'm alive" },
  { t: 30, text: "You're just too good to be true" },
  { t: 35, text: "Can't take my eyes off you" },
  { t: 40, text: "Eres demasiado buena para ser verdad" },
  { t: 45, text: "No puedo apartar mis ojos de ti" },
  { t: 50, text: "Serías como el cielo al tocarte" },
  { t: 55, text: "Quiero abrazarte tanto" },
  { t: 60, text: "Por fin ha llegado el amor" },
  { t: 65, text: "Y agradezco a Dios estar vivo" },
  { t: 70, text: "Eres demasiado buena para ser verdad" },
  { t: 75, text: "No puedo apartar mis ojos de ti" }
];

const audio = document.getElementById('audio');
const lyricsDiv = document.getElementById('lyrics');

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
    }
  });
});
