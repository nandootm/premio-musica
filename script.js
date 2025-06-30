document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('song');
    const audioControl = document.getElementById('audio-control');
    const lyricsContainer = document.getElementById('lyrics-container');
    const sunflowersContainer = document.getElementById('sunflowers-container');
    
    // Configuración
    let audioPlaying = false;
    const sunflowerCount = 7;
    const sunflowers = [];
    
    // Letras de la canción con traducción
    const lyrics = [
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 10
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 15 
        },
        { 
            english: "You'd be like Heaven to touch", 
            spanish: "Serías como el cielo al tocar",
            time: 20
        },
        { 
            english: "I wanna hold you so much", 
            spanish: "Quiero abrazarte tanto",
            time: 25
        },
        { 
            english: "At long last, love has arrived", 
            spanish: "Al fin, el amor ha llegado",
            time: 30
        },
        { 
            english: "And I thank God I'm alive", 
            spanish: "Y le agradezco a Dios estar vivo",
            time: 35 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 40
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 45
        },
        { 
            english: "Pardon the way that I stare", 
            spanish: "Perdona la forma en que miro",
            time: 50 
        },
        { 
            english: "There's nothin' else to compare", 
            spanish: "No hay nada con qué comparar",
            time: 55
        },
        { 
            english: "The sight of you leaves me weak", 
            spanish: "Tu vista me deja débil",
            time: 60
        },
        { 
            english: "There are no words left to speak", 
            spanish: "No quedan palabras por decir",
            time: 65 
        },
        { 
            english: "But if you feel like I feel", 
            spanish: "Pero si sientes como yo siento",
            time: 70
        },
        { 
            english: "Please let me know that it's real", 
            spanish: "Por favor, dime que es real",
            time: 75 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 80 
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 85
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 90 
        },
        { 
            english: "And if it's quite alright", 
            spanish: "Y si está bien",
            time: 95
        },
        { 
            english: "I need you, baby", 
            spanish: "Te necesito, nena",
            time: 100 
        },
        { 
            english: "To warm the lonely night", 
            spanish: "Para calentar la noche solitaria",
            time: 105
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 120
        },
        { 
            english: "Trust in me when I say", 
            spanish: "Confía en mí cuando digo",
            time: 125 
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 130
        },
        { 
            english: "Don't bring me down, I pray", 
            spanish: "No me derrumbes, rezo",
            time: 135
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 140
        },
        { 
            english: "Now that I've found you, stay", 
            spanish: "Ahora que te he encontrado, quédate",
            time: 145
        },
        { 
            english: "And let me love you, baby", 
            spanish: "Y déjame amarte, nena",
            time: 150
        },
        { 
            english: "Let me love you", 
            spanish: "Déjame amarte",
            time: 155 
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 160 
        },
        { 
            english: "Can't take my eyes off of you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 165
        },
        { 
            english: "You'd be like Heaven to touch", 
            spanish: "Serías como el cielo al tocar",
            time: 170
        },
        { 
            english: "I wanna hold you so much", 
            spanish: "Quiero abrazarte tanto",
            time: 175
        },
        { 
            english: "At long last, love has arrived", 
            spanish: "Al fin, el amor ha llegado",
            time: 180 
        },
        { 
            english: "And I thank God I'm alive", 
            spanish: "Y le agradezco a Dios estar vivo",
            time: 185
        },
        { 
            english: "You're just too good to be true", 
            spanish: "Eres demasiado buena para ser cierta",
            time: 190
        },
        { 
            english: "Can't take my eyes off you", 
            spanish: "No puedo apartar mis ojos de ti",
            time: 200 
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 205
        },
        { 
            english: "And if it's quite alright", 
            spanish: "Y si está bien",
            time: 210
        },
        { 
            english: "I need you, baby", 
            spanish: "Te necesito, nena",
            time: 215
        },
        { 
            english: "To warm the lonely night", 
            spanish: "Para calentar la noche solitaria",
            time: 220
        },
        { 
            english: "I love you, baby", 
            spanish: "Te amo, nena",
            time: 225 
        },
        { 
            english: "Trust in me when I say", 
            spanish: "Confía en mí cuando digo",
            time: 230
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 235 
        },
        { 
            english: "Don't bring me down, I pray", 
            spanish: "No me derrumbes, rezo",
            time: 240
        },
        { 
            english: "Oh, pretty baby", 
            spanish: "Oh, bebé bonita",
            time: 245
        },
        { 
            english: "Now that I've found you, stay", 
            spanish: "Ahora que te he encontrado, quédate",
            time: 250
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
    
    // Crear girasoles con movimiento
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
            
            // Velocidad de movimiento y rotación aleatoria
            const speedX = (Math.random() - 0.5) * 3;
            const speedY = (Math.random() - 0.5) * 3;
            const rotationSpeed = (Math.random() * 2) + 1;
            
            sunflowersContainer.appendChild(sunflower);
            
            sunflowers.push({
                element: sunflower,
                x: posX,
                y: posY,
                speedX: speedX,
                speedY: speedY,
                rotation: 0,
                rotationSpeed: rotationSpeed,
                width: 60,
                height: 60
            });
        }
    }
    
    // Animación de los girasoles (rebote en bordes)
    function animateSunflowers() {
        const maxX = window.innerWidth - 60;
        const maxY = window.innerHeight - 60;
        
        sunflowers.forEach(sunflower => {
            // Actualizar posición
            sunflower.x += sunflower.speedX;
            sunflower.y += sunflower.speedY;
            
            // Rebotar en los bordes
            if (sunflower.x <= 0 || sunflower.x >= maxX) {
                sunflower.speedX *= -1;
            }
            if (sunflower.y <= 0 || sunflower.y >= maxY) {
                sunflower.speedY *= -1;
            }
            
            // Actualizar rotación
            sunflower.rotation += sunflower.rotationSpeed;
            
            // Aplicar transformaciones
            sunflower.element.style.left = `${sunflower.x}px`;
            sunflower.element.style.top = `${sunflower.y}px`;
            sunflower.element.style.transform = `rotate(${sunflower.rotation}deg)`;
        });
        
        requestAnimationFrame(animateSunflowers);
    }
    
    // Mostrar letras palabra por palabra
    function startLyrics() {
        lyrics.forEach(line => {
            setTimeout(() => {
                // Mostrar versión en inglés palabra por palabra
                createLyricElement(line.english, 'english');
                
                // Mostrar versión en español palabra por palabra 1 segundo después
                setTimeout(() => {
                    createLyricElement(line.spanish, 'spanish');
                }, 1000);
            }, line.time * 1000);
        });
    }
    
    function createLyricElement(text, language) {
        const lyricContainer = document.createElement('div');
        lyricContainer.className = `lyric ${language}`;
        
        // Posición aleatoria dentro de la pantalla
        const posX = Math.random() * (window.innerWidth - 500) + 100;
        const posY = Math.random() * (window.innerHeight - 200) + 100;
        
        lyricContainer.style.left = `${posX}px`;
        lyricContainer.style.top = `${posY}px`;
        
        // Dividir el texto en palabras
        const words = text.split(' ');
        let delay = 0;
        
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word + ' ';
            wordSpan.style.opacity = '0';
            wordSpan.style.display = 'inline-block';
            wordSpan.style.transition = 'opacity 0.5s ease';
            
            // Animación para aparecer palabra por palabra
            setTimeout(() => {
                wordSpan.style.opacity = '1';
            }, delay);
            
            delay += 300; // 300ms entre palabras
            
            lyricContainer.appendChild(wordSpan);
        });
        
        // Para el español, asignar una animación de movimiento aleatoria
        if (language === 'spanish') {
            const animations = [
                'moveRight', 'moveLeft', 'moveUp', 'moveDown',
                'moveUpRight', 'moveUpLeft', 'moveDownRight', 'moveDownLeft'
            ];
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            lyricContainer.style.animation = `${randomAnimation} 7s ease-in-out forwards`;
        } else {
            // Para inglés, mantener la animación de aparición en el mismo lugar
            lyricContainer.style.animation = `lyricAppear 7s ease-in-out forwards`;
        }
        
        lyricsContainer.appendChild(lyricContainer);
        
        // Eliminar después de 7 segundos
        setTimeout(() => {
            lyricContainer.remove();
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
    animateSunflowers();
    playAudioImmediately();
    
    // Ajustar al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        sunflowers.forEach(sunflower => {
            const maxX = window.innerWidth - sunflower.width;
            const maxY = window.innerHeight - sunflower.height;
            
            if (sunflower.x > maxX) sunflower.x = maxX;
            if (sunflower.y > maxY) sunflower.y = maxY;
        });
    });
});
