const lyricsEn = [
  "You're just too good to be true",
  "Can't take my eyes off of you",
  "You'd be like Heaven to touch",
  "I wanna hold you so much",
  "At long last, love has arrived",
  "And I thank God I'm alive",
  "You're just too good to be true",
  "Can't take my eyes off of you"
];

const lyricsEs = [
  "Eres demasiado perfecta para ser verdad",
  "No puedo apartar mis ojos de ti",
  "Serías como el cielo al tocar",
  "Quiero abrazarte tanto",
  "Por fin el amor ha llegado",
  "Y doy gracias a Dios por estar vivo",
  "Eres demasiado perfecta para ser verdad",
  "No puedo apartar mis ojos de ti"
];

// Mostrar letras directamente
const enContainer = document.getElementById('lyrics-en');
const esContainer = document.getElementById('lyrics-es');

lyricsEn.forEach(line => {
  const p = document.createElement('p');
  p.textContent = line;
  enContainer.appendChild(p);
});

lyricsEs.forEach(line => {
  const p = document.createElement('p');
  p.textContent = line;
  esContainer.appendChild(p);
});

