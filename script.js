document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('song');
    const audioControl = document.getElementById('audio-control');
    const lyricsContainer = document.getElementById('lyrics-container');
    const sunflower = document.getElementById('sunflower');
    
    // Configuración inicial
    let audioPlaying = false;
    let sunflowerX = 50;
    let sunflowerY = 50;
    let sunflowerSpeedX = 2;
    let sunflowerSpeedY = 2;
    let rotation = 0;
    
    // Letras de la canción con tiempos aproximados
    const lyrics = [
        { text: "You're just too good to be true", time: 0 },
        { text: "Can't take my eyes off of you", time: 4 },
        { text: "You'd be like Heaven to touch", time: 8 },
        { text: "I wanna hold you so much", time: 12 },
        { text: "At long last, love has arrived", time: 16 },
        { text: "And I thank God I'm alive", time: 20 },
        { text: "You're just too good to be true", time: 24 },
        { text: "Can't take my eyes off of you", time: 28 },
        { text: "Pardon the way that I stare", time: 32 },
        { text: "There's nothin' else to compare", time: 36 },
        { text: "The sight of you leaves me weak", time: 40 },
        { text: "There are no words left to speak", time: 44 },
        { text: "But if you feel like I feel", time: 48 },
        { text: "Please let me know that it's real", time: 52 },
        { text: "You're just too good to be true", time: 56 },
        { text: "Can't take my eyes off of you", time: 60 },
        { text: "I love you, baby", time: 64 },
        { text: "And if it's quite alright", time: 67 },
        { text: "I need you, baby", time: 70 },
        { text: "To warm the lonely night", time: 73 },
        { text: "I love you, baby", time: 76 },
        { text: "Trust in me when I say", time: 79 },
        { text: "Oh, pretty baby", time: 82 },
        { text: "Don't bring me down, I pray", time: 85 },
        { text: "Oh, pretty baby", time: 88 },
        { text: "Now that I've found you, stay", time: 91 },
        { text: "And let me love you, baby", time: 94 },
        { text: "Let me love you", time: 97 },
        { text: "You're just too good to be true", time: 100 },
        { text: "Can't take my eyes off of you", time: 104 },
        { text: "You'd be like Heaven to touch", time: 108 },
        { text: "I wanna hold you so much", time: 112 },
        { text: "At long last, love has arrived", time: 116 },
        { text: "And I thank God I'm alive", time: 120 },
        { text: "You're just too good to be true", time: 124 },
        { text: "Can't take my eyes off you", time: 128 },
        { text: "I love you, baby", time: 132 },
        { text: "And if it's quite alright", time: 135 },
        { text: "I need you, baby", time: 138 },
        { text: "To warm the lonely night", time: 141 },
        { text: "I love you, baby", time: 144 },
        { text: "Trust in me when I say", time: 147 },
        { text: "Oh, pretty baby", time: 150 },
        { text: "Don't bring me down, I pray", time: 153 },
        { text: "Oh, pretty baby", time: 156 },
        { text: "Now that I've found you, stay", time: 159 }
    ];
    
    // Reproducir audio automáticamente (con interacción del usuario)
    document.body.addEventListener('click', function() {
        if (!audioPlaying) {
            audio.play().then(() => {
                audioPlaying = true;
                audioControl.textContent = '⏸';
                startLyrics();
            }).catch(error => {
                console.log('La reproducción automática fue bloqueada:', error);
                audioControl.textContent = '▶';
            });
        }
    }, { once: true });
    
    // Control de audio
    audioControl.addEventListener('click', function() {
        if (audioPlaying) {
            audio.pause();
            audioControl.textContent = '▶';
        } else {
            audio.play();
            audioControl.textContent = '⏸';
        }
        audioPlaying = !audioPlaying;
    });
    
    // Mostrar letras sincronizadas
    function startLyrics() {
        lyrics.forEach((line, index) => {
            setTimeout(() => {
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric';
                lyricElement.textContent = line.text;
                lyricElement.style.animationDuration = `${lyrics.length * 0.3}s`;
                lyricsContainer.appendChild(lyricElement);
                
                // Eliminar la letra después de que termine la animación
                setTimeout(() => {
                    lyricElement.remove();
                }, 15000);
            }, line.time * 1000);
        });
    }
    
    // Animación del girasol
    function animateSunflower() {
        const maxX = window.innerWidth - sunflower.width;
        const maxY = window.innerHeight - sunflower.height;
        
        sunflowerX += sunflowerSpeedX;
        sunflowerY += sunflowerSpeedY;
        rotation += 2;
        
        // Rebotar en los bordes
        if (sunflowerX <= 0 || sunflowerX >= maxX) {
            sunflowerSpeedX *= -1;
        }
        if (sunflowerY <= 0 || sunflowerY >= maxY) {
            sunflowerSpeedY *= -1;
        }
        
        sunflower.style.left = `${sunflowerX}px`;
        sunflower.style.top = `${sunflowerY}px`;
        sunflower.style.transform = `rotate(${rotation}deg)`;
        
        requestAnimationFrame(animateSunflower);
    }
    
    // Iniciar animaciones
    animateSunflower();
    
    // Posición inicial aleatoria del girasol
    sunflowerX = Math.random() * (window.innerWidth - sunflower.width);
    sunflowerY = Math.random() * (window.innerHeight - sunflower.height);
});
