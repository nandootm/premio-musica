document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('song');
    const audioControl = document.getElementById('audio-control');
    const lyricsContainer = document.getElementById('lyrics-container');
    const sunflowerContainer = document.querySelector('.sunflower-container');
    
    // Configuración inicial
    let audioPlaying = false;
    const sunflowers = [];
    const sunflowerCount = 7;
    const sunflowerSpeeds = [];
    
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
    
    // Intentar reproducir audio inmediatamente
    function tryPlayAudio() {
        audio.play().then(() => {
            audioPlaying = true;
            audioControl.textContent = '⏸';
            startLyrics();
        }).catch(error => {
            console.log('La reproducción automática fue bloqueada:', error);
            audioControl.textContent = '▶';
            // Mostrar instrucción para hacer clic
            const instruction = document.createElement('div');
            instruction.textContent = 'Haz clic en cualquier parte para reproducir la música';
            instruction.style.position = 'fixed';
            instruction.style.top = '50%';
            instruction.style.left = '50%';
            instruction.style.transform = 'translate(-50%, -50%)';
            instruction.style.backgroundColor = 'rgba(0,0,0,0.7)';
            instruction.style.padding = '20px';
            instruction.style.borderRadius = '10px';
            instruction.style.zIndex = '100';
            document.body.appendChild(instruction);
            
            document.body.addEventListener('click', function initAudio() {
                audio.play();
                audioPlaying = true;
                audioControl.textContent = '⏸';
                startLyrics();
                document.body.removeChild(instruction);
                document.body.removeEventListener('click', initAudio);
            });
        });
    }
    
    // Iniciar la reproducción al cargar
    tryPlayAudio();
    
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
    
    // Mostrar letras en posiciones aleatorias
    function startLyrics() {
        lyrics.forEach((line, index) => {
            setTimeout(() => {
                const lyricElement = document.createElement('div');
                lyricElement.className = 'lyric';
                lyricElement.textContent = line.text;
                
                // Posición aleatoria
                const posX = Math.random() * (window.innerWidth - 300) + 50;
                const posY = Math.random() * (window.innerHeight - 100) + 50;
                
                lyricElement.style.left = `${posX}px`;
                lyricElement.style.top = `${posY}px`;
                
                // Color aleatorio (tonos cálidos)
                const hue = Math.random() * 60 + 10; // Entre amarillo y rojo
                lyricElement.style.color = `hsl(${hue}, 100%, 70%)`;
                
                lyricsContainer.appendChild(lyricElement);
                
                // Eliminar la letra después de que termine la animación
                setTimeout(() => {
                    lyricElement.remove();
                }, 6000);
            }, line.time * 1000);
        });
    }
    
    // Crear 7 girasoles
    function createSunflowers() {
        for (let i = 0; i < sunflowerCount; i++) {
            const sunflower = document.createElement('img');
            sunflower.className = 'sunflower';
            sunflower.src = 'sunflower.png';
            sunflower.alt = 'Girasol';
            
            // Posición inicial aleatoria
            const posX = Math.random() * (window.innerWidth - 80);
            const posY = Math.random() * (window.innerHeight - 80);
            
            sunflower.style.left = `${posX}px`;
            sunflower.style.top = `${posY}px`;
            
            // Velocidad aleatoria
            const speedX = (Math.random() * 3 + 1) * (Math.random() > 0.5 ? 1 : -1);
            const speedY = (Math.random() * 3 + 1) * (Math.random() > 0.5 ? 1 : -1);
            
            sunflowerContainer.appendChild(sunflower);
            sunflowers.push({
                element: sunflower,
                x: posX,
                y: posY,
                speedX: speedX,
                speedY: speedY,
                rotation: Math.random() * 360
            });
        }
    }
    
    // Animación de los girasoles
    function animateSunflowers() {
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 80;
        
        sunflowers.forEach(sunflower => {
            sunflower.x += sunflower.speedX;
            sunflower.y += sunflower.speedY;
            sunflower.rotation += sunflower.speedX;
            
            // Rebotar en los bordes
            if (sunflower.x <= 0 || sunflower.x >= maxX) {
                sunflower.speedX *= -1;
            }
            if (sunflower.y <= 0 || sunflower.y >= maxY) {
                sunflower.speedY *= -1;
            }
            
            sunflower.element.style.left = `${sunflower.x}px`;
            sunflower.element.style.top = `${sunflower.y}px`;
            sunflower.element.style.transform = `rotate(${sunflower.rotation}deg)`;
        });
        
        requestAnimationFrame(animateSunflowers);
    }
    
    // Inicializar
    createSunflowers();
    animateSunflowers();
    
    // Ajustar al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        sunflowers.forEach(sunflower => {
            const maxX = window.innerWidth - 80;
            const maxY = window.innerHeight - 80;
            
            if (sunflower.x > maxX) sunflower.x = maxX;
            if (sunflower.y > maxY) sunflower.y = maxY;
        });
    });
});
