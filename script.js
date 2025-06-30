const lyricsContainer = document.getElementById("lyrics-container");
const lyrics = [
  { time: 9, en: "You're just too good to be true", es: "Eres demasiado buena para ser real" },
  { time: 13, en: "Can't take my eyes off of you", es: "No puedo quitarte los ojos de encima" },
  { time: 17, en: "You'd be like Heaven to touch", es: "Serías como el cielo al tocarte" },
  { time: 21, en: "I wanna hold you so much", es: "Quiero abrazarte tanto" },
  { time: 25, en: "At long last, love has arrived", es: "Al fin, el amor ha llegado" },
  { time: 29, en: "And I thank God I'm alive", es: "Y agradezco a Dios estar vivo" },
  { time: 33, en: "You're just too good to be true", es: "Eres demasiado buena para ser real" },
  { time: 37, en: "Can't take my eyes off of you", es: "No puedo quitarte los ojos de encima" },
  { time: 41, en: "Pardon the way that I stare", es: "Perdona la forma en que te miro" },
  { time: 45, en: "There's nothin' else to compare", es: "No hay nada que se compare" },
  { time: 49, en: "The sight of you leaves me weak", es: "Verte me deja sin fuerzas" },
  { time: 53, en: "There are no words left to speak", es: "No quedan palabras por decir" },
  { time: 57, en: "But if you feel like I feel", es: "Pero si tú sientes lo mismo que yo" },
  { time: 61, en: "Please let me know that it's real", es: "Por favor dime que es real" },
  { time: 65, en: "You're just too good to be true", es: "Eres demasiado buena para ser real" },
  { time: 69, en: "Can't take my eyes off of you", es: "No puedo quitarte los ojos de encima" },
  { time: 73, en: "I love you, baby", es: "Te amo, nena" },
  { time: 77, en: "And if it's quite alright", es: "Y si está todo bien" },
  { time: 81, en: "I need you, baby", es: "Te necesito, nena" },
  { time: 85, en: "To warm the lonely night", es: "Para calentar la noche solitaria" },
  { time: 89, en: "I love you, baby", es: "Te amo, nena" },
  { time: 93, en: "Trust in me when I say", es: "Confía en mí cuando digo" },
  { time: 97, en: "Oh, pretty baby", es: "Oh, linda nena" },
  { time: 101, en: "Don't bring me down, I pray", es: "No me deprimas, te lo ruego" },
  { time: 105, en: "Oh, pretty baby", es: "Oh, linda nena" },
  { time: 109, en: "Now that I've found you, stay", es: "Ahora que te encontré, quédate" },
  { time: 113, en: "And let me love you, baby", es: "Y déjame amarte, nena" },
  { time: 117, en: "Let me love you", es: "Déjame amarte" }
];

function showLyric(line){
  const div = document.createElement('div');
  div.className = 'lyric-line';
  div.innerHTML = `${line.en}<br><i style="color:#f0f">${line.es}</i>`;
  div.style.top = `${Math.random()*80 + 5}%`;
  div.style.left = `${Math.random()*80 + 5}%`;
  lyricsContainer.appendChild(div);
  div.animate([{opacity:0, transform:'scale(0.8)'},{opacity:1},{opacity:0, transform:'scale(1.5)'}], {duration:8000, easing:'ease-in-out'});
  setTimeout(()=>lyricsContainer.removeChild(div), 8000);
}

window.addEventListener('DOMContentLoaded', () => {
  lyrics.forEach(line => {
    setTimeout(() => showLyric(line), line.time * 1000);
  });
});

