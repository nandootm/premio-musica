const sunflower = document.getElementById('sunflower');
const audio = document.getElementById('music');
const pauseBtn = document.getElementById('pauseBtn');
const lyricsContainer = document.getElementById('lyrics-container');

const lyrics = `
You're just too good to be true
Can't take my eyes off of you
You'd be like Heaven to touch
I wanna hold you so much
At long last, love has arrived
And I thank God I'm alive
You're just too good to be true
Can't take my eyes off of you
Pardon the way that I stare
There's nothin' else to compare
The sight of you leaves me weak
There are no words left to speak
But if you feel like I feel
Please let me know that it's real
You're just too good to be true
Can't take my eyes off of you
I love you, baby
And if it's quite alright
I need you, baby
To warm the lonely night
I love you, baby
Trust in me when I say
Oh, pretty baby
Don't bring me down, I pray
Oh, pretty baby
Now that I've found you, stay
And let me love you, baby
Let me love you
You're just too good to be true
Can't take my eyes off of you
You'd be like Heaven to touch
I wanna hold you so much
At long last, love has arrived
And I thank God I'm alive
You're just too good to be true
Can't take my eyes off you
I love you, baby
And if it's quite alright
I need you, baby
To warm the lonely night
I love you, baby
Trust in me when I say
Oh, pretty baby
Don't bring me down, I pray
Oh, pretty baby
Now that I've found you, stay
Oh, pretty baby
Trust in me when I say
Oh, pretty baby
`.trim().split('\n');

let index = 0;

function showLyric() {
  if (index >= lyrics.length) return;
  const line = lyrics[index++];
  const div = document.createElement('div');
  div.className = 'lyric-line';
  div.textContent = line;

  // Random position
  div.style.top = `${Math.random() * 80 + 10}%`;
  div.style.left = `${Math.random() * 80 + 10}%`;

  lyricsContainer.appendChild(div);
  setTimeout(() => {
    lyricsContainer.removeChild(div);
  }, 8000);

  setTimeout(showLyric, 3000); // ritmo de aparición
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

// Sunflower bouncing
let x = 100, y = 100, dx = 2, dy = 2;

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

  requestAnimationFrame(moveSunflower);
}

document.addEventListener('DOMContentLoaded', () => {
  showLyric();
  moveSunflower();
});
