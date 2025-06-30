const audio = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
const lyricsContainer = document.getElementById('lyrics-container');
const sunflower = document.getElementById('sunflower');
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Partículas
const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*1,
    dy: (Math.random()-0.5)*1
  });
}
function drawParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += p.dx; p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
    ctx.fillStyle = 'rgba(0,255,255,0.7)';
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Letras en inglés y español
const lyrics = [
  {time:0, en:"You're just too good to be true", es:"Eres demasiado buena para ser real"},
  {time:5, en:"Can't take my eyes off of you", es:"No puedo quitarte los ojos de encima"},
  // ... continúa con los tiempos sincronizados ...
];
let idx = 0;

function showLyric(line){
  const div = document.createElement('div');
  div.className = 'lyric-line';
  div.innerHTML = `${line.en}<br><i>${line.es}</i>`;
  div.style.top = `${10 + Math.random()*80}%`;
  div.style.left = `${10 + Math.random()*80}%`;
  lyricsContainer.appendChild(div);
  div.animate([{opacity:0},{opacity:1},{opacity:1},{opacity:0}], 
    {duration:8000, easing:'ease-out'});
  setTimeout(()=>lyricsContainer.removeChild(div),8000);
}

function startLyrics(){
  audio.play();
  playBtn.style.display = 'none';
  lyrics.forEach(line=>{
    setTimeout(()=>showLyric(line), line.time * 1000);
  });
}

playBtn.addEventListener('click', startLyrics);

// Girar girasol — ya con CSS

