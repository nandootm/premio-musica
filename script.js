const sunflower = document.getElementById('sunflower');
const audio = document.getElementById('music');
const pauseBtn = document.getElementById('pauseBtn');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsEsContainer = document.getElementById('lyrics-es-container');

const lyricsEn = `You're just too good to be true
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
Oh, pretty baby`.trim().split('\n');

const lyricsEs = `Eres demasiado buena para ser verdad
No puedo apartar mis ojos de ti
Serías como el cielo al tocarte
Quiero abrazarte tanto
Por fin, el amor ha llegado
Y le agradezco a Dios estar vivo
Eres demasiado buena para ser verdad
No puedo apartar mis ojos de ti
Perdona la forma en que te miro
No hay nada que se compare
Tu imagen me deja débil
Ya no tengo palabras
Pero si sientes como yo siento
Hazme saber que es real
Eres demasiado buena para ser verdad
No puedo apartar mis ojos de ti
Te amo, cariño
Y si está todo bien
Te necesito, cariño
Para calentar la noche solitaria
Te amo, cariño
Confía en mí cuando digo
Oh, preciosa
No me desanimes, te ruego
Oh, preciosa
Ahora que te encontré, quédate
Y déjame amarte, cariño
Déjame amarte
Eres demasiado buena para ser verdad
No puedo apartar mis ojos de ti
Serías como el cielo al tocarte
Quiero abrazarte tanto
Por fin, el amor ha llegado
Y le agradezco a Dios estar vivo
Eres demasiado buena para ser verdad
No puedo apartar mis ojos de ti
Te amo, cariño
Y si está todo bien
Te necesito, cariño
Para calentar la noche solitaria
Te amo, cariño
Confía en mí cuando digo
Oh, preciosa
No me desanimes, te ruego
Oh, preciosa
Ahora que te encontré, quédate
Oh, preciosa
Confía en mí cuando digo
Oh, preciosa`.trim().split('\n');

let index = 0;

function showLyrics() {
  if (index >= lyricsEn.length) return;

  const lineEn = lyricsEn[index];
  const lineEs = lyricsEs[index] || '';

  const divEn = document.createElement('div');
  divEn.className = 'lyric-line';
  divEn.textContent = lineEn;

  const divEs = document.createElement('div');
  divEs.className = 'lyric-es-line';
  divEs.textContent = lineEs;

  const topPos = Math.random() * 60 + 10;
  const leftPosEn = Math.random() * 50 + 10;
  const leftPosEs = Math.random() * 50 + 30;

  divEn.style.top = `${topPos}%`;
  divEn.style.left = `${leftPosEn}%`;

  divEs.style.top = `${topPos + 5}%`;
  divEs.style.left = `${leftPosEs}%`;

  lyricsContainer.appendChild(divEn);
  lyricsEsContainer.appendChild(divEs);

  setTimeout(() => {
    lyricsContainer.removeChild(divEn);
    lyricsEsContainer.removeChild(divEs);
  }, 6000);

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

document.addEventListener('DOMContentLoaded', () => {
  showLyrics();
});
