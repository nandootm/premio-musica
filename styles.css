* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  background-color: #000;
}

#bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  opacity: 1;
}

#bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#main-title {
  position: fixed;
  top: 1rem;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.15);
  font-weight: bold;
  z-index: 3;
  pointer-events: none;
}

#poetic {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.4rem;
  color: pink;
  font-family: 'Brush Script MT', cursive;
  z-index: 3;
  pointer-events: none;
}

#sunflower-button {
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 1rem;
  right: 1rem;
  background: url('sunflower.png') no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  animation: spin 10s linear infinite;
  z-index: 4;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

#floating-lyrics {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.lyric {
  position: absolute;
  color: rgba(255, 255, 255, 0.07);
  font-size: 3vw;
  font-weight: bold;
  animation: floatText 10s linear forwards;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

@keyframes floatText {
  0% {
    opacity: 0;
    transform: translateY(100vh) scale(0.5);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-10vh) scale(1);
  }
}

/* Pantalla final */
#final-screen {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(white, black);
  z-index: 999;
  animation: flash 1s infinite alternate;
}

#final-message {
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
  color: gold;
  font-size: 2.5rem;
  font-weight: bold;
  z-index: 1001;
  text-shadow: 0 0 8px black;
}

#giant-sunflower {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  background: url('sunflower.png') no-repeat center center;
  background-size: contain;
  transform: translate(-50%, -50%);
  animation: spin 6s linear infinite;
  z-index: 1000;
  opacity: 1;
}

#final-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  pointer-events: none;
}
