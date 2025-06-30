document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('song');
    const audioControl = document.getElementById('audio-control');
    const lyricsContainer = document.getElementById('lyrics-container');
    const sunflowersContainer = document.getElementById('sunflowers-container');
    
    // Configuración
    let audioPlaying = false;
    const sunflowerCount = 7;
    
    // Letras de la canción con traducción
    const lyrics = [
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 0 
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 4 
        },
        { 
            english: "You'd be like Heaven to touch", 
            spanish: "Serías como el cielo al tocar",
            time: 8 
        },
        { 
            english: "I wanna hold you so much", 
            spanish: "Quiero abrazarte tanto",
            time: 12 
        },
        { 
            english: "At long last, love has arrived", 
            spanish: "Al fin, el amor ha llegado",
            time: 16 
        },
        { 
            english: "And I thank God I'm alive", 
            spanish: "Y le agradezco a Dios estar vivo",
            time: 20 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 24 
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 28 
        },
        { 
            english: "Pardon the way that I stare", 
            spanish: "Perdona la forma en que miro",
            time: 32 
        },
        { 
            english: "There's nothin' else to compare", 
            spanish: "No hay nada con qué comparar",
            time: 36 
        },
        { 
            english: "The sight of you leaves me weak", 
            spanish: "Tu vista me deja débil",
            time: 40 
        },
        { 
            english: "There are no words left to speak", 
            spanish: "No quedan palabras por decir",
            time: 44 
        },
        { 
            english: "But if you feel like I feel", 
            spanish: "Pero si sientes como yo siento",
            time: 48 
        },
        { 
            english: "Please let me know that it's real", 
            spanish: "Por favor, dime que es real",
            time: 52 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 56 
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 60 
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 64 
        },
        { 
            english: "And if it's quite alright", 
            spanish: "Y si está bien",
            time: 67 
        },
        { 
            english: "I need you, baby", 
            spanish: "Te necesito, nena",
            time: 70 
        },
        { 
            english: "To warm the lonely night", 
            spanish: "Para calentar la noche solitaria",
            time: 73 
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 76 
        },
        { 
            english: "Trust in me when I say", 
            spanish: "Confía en mí cuando digo",
            time: 79 
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 82 
        },
        { 
            english: "Don't bring me down, I pray", 
            spanish: "No me derrumbes, rezo",
            time: 85 
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 88 
        },
        { 
            english: "Now that I've found you, stay", 
            spanish: "Ahora que te he encontrado, quédate",
            time: 91 
        },
        { 
            english: "And let me love you, baby", 
            spanish: "Y déjame amarte, nena",
            time: 94 
        },
        { 
            english: "Let me love you", 
            spanish: "Déjame amarte",
            time: 97 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 100 
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 104 
        },
        { 
            english: "You'd be like Heaven to touch", 
            spanish: "Serías como el cielo al tocar",
            time: 108 
        },
        { 
            english: "I wanna hold you so much", 
            spanish: "Quiero abrazarte tanto",
            time: 112 
        },
        { 
            english: "At long last, love has arrived", 
            spanish: "Al fin, el amor ha llegado",
            time: 116 
        },
        { 
            english: "And I thank God I'm alive", 
            spanish: "Y le agradezco a Dios estar vivo",
            time: 120 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 124 
        },
        { 
            english: "Can't take my eyes off you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 128 
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 132 
        },
        { 
            english: "And if it's quite alright", 
            spanish: "Y si está bien",
            time: 135 
        },
        { 
            english: "I need you, baby", 
            spanish: "Te necesito, nena",
            time: 138 
        },
        { 
            english: "To warm the lonely night", 
            spanish: "Para calentar la noche solitaria",
            time: 141 
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 144 
        },
        { 
            english: "Trust in me when I say", 
            spanish: "Confía en mí cuando digo",
            time: 147 
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 150 
        },
        { 
            english: "Don't bring me down, I pray", 
            spanish: "No me derrumbes, rezo",
            time: 153 
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 156 
        },
        { 
            english: "Now that I've found you, stay", 
            spanish: "Ahora que te he encontrado, quédate",
            time: 159 
        }
    ];
    
    // Crear partículas flotantes
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-container';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Tamaño y posición aleatorios
            const size = Math.random() * 8 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Animación personalizada
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Reproducir audio inmediatamente
    function playAudioImmediately() {
        // Crear un evento de usuario simulado para superar restricciones de autoplay
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
        
        // Intentar reproducir después de un pequeño retraso
        setTimeout(() => {
            audio.play().then(() => {
                audioPlaying = true;
                audioControl.textContent = '⏸';
                startLyrics();
            }).catch(error => {
                console.log('Error al reproducir audio:', error);
                showPlayMessage();
            });
        }, 300);
    }
    
    // Mostrar mensaje de reproducción
    function showPlayMessage() {
        const message = document.createElement('div');
        message.textContent = 'Haz clic para reproducir la música';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.backgroundColor = 'rgba(0,0,0,0.7)';
        message.style.padding = '20px';
        message.style.borderRadius = '10px';
        message.style.zIndex = '100';
        message.style.fontSize = '1.5rem';
        message.style.textAlign = 'center';
        document.body.appendChild(message);
        
        document.body.addEventListener('click', function initAudio() {
            audio.play();
            audioPlaying = true;
            audioControl.textContent = '⏸';
            startLyrics();
            document.body.removeChild(message);
            document.body.removeEventListener('click', initAudio);
        });
    }
    
    // Crear girasoles
    function createSunflowers() {
        for (let i = 0; i < sunflowerCount; i++) {
            const sunflower = document.createElement('img');
            sunflower.className = 'sunflower';
            sunflower.src = 'sunflower.png';
            sunflower.alt = 'Girasol';
            
            // Posición inicial aleatoria
            const posX = Math.random() * (window.innerWidth - 60);
            const posY = Math.random() * (window.innerHeight - 60);
            
            sunflower.style.left = `${posX}px`;
            sunflower.style.top = `${posY}px`;
            
            // Velocidad de rotación aleatoria
            sunflower.style.animationDuration = `${Math.random() * 10 + 5}s`;
            
            sunflowersContainer.appendChild(sunflower);
        }
    }
    
    // Mostrar letras con efectos
    function startLyrics() {
        lyrics.forEach(line => {
            setTimeout(() => {
                // Mostrar versión en inglés
                createLyricElement(line.english, 'english');
                
                // Mostrar versión en español 1 segundo después
                setTimeout(() => {
                    createLyricElement(line.spanish, 'spanish');
                }, 1000);
            }, line.time * 1000);
        });
    }
    
    function createLyricElement(text, language) {
        const lyricElement = document.createElement('div');
        lyricElement.className = `lyric ${language}`;
        lyricElement.textContent = text;
        
        // Posición aleatoria dentro de la pantalla
        const posX = Math.random() * (window.innerWidth - 400) + 100;
        const posY = Math.random() * (window.innerHeight - 200) + 100;
        
        lyricElement.style.left = `${posX}px`;
        lyricElement.style.top = `${posY}px`;
        
        // Color adicional para español
        if (language === 'spanish') {
            lyricElement.style.textShadow = '0 0 15px rgba(255, 107, 107, 0.9)';
        }
        
        lyricsContainer.appendChild(lyricElement);
        
        // Eliminar después de 7 segundos
        setTimeout(() => {
            lyricElement.remove();
        }, 7000);
    }
    
    // Evento para iniciar la reproducción con cualquier clic
    document.addEventListener('click', function() {
        if (!audioPlaying) {
            audio.play().then(() => {
                audioPlaying = true;
                audioControl.textContent = '⏸';
                startLyrics();
            }).catch(error => {
                console.log('Error al reproducir:', error);
            });
        }
    }, { once: true });
    
    // Control de audio
    audioControl.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (audioPlaying) {
            audio.pause();
            audioControl.textContent = '▶';
        } else {
            audio.play();
            audioControl.textContent = '⏸';
        }
        audioPlaying = !audioPlaying;
    });
    
    // Inicializar
    createSunflowers();
    createParticles();
    playAudioImmediately();
});
