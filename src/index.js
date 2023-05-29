import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";

// set background
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.onload = () => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      drawImageOnCanvas();
    };
    img.src = 'pictures/pond.png';
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    function drawImageOnCanvas() {
      const scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);
      const scaledWidth = img.width * scaleFactor;
      const scaledHeight = img.height * scaleFactor;
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;
  
      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
    }

    // logic for starting game
    const startGame = (e) => {
      // hide introduction
      let introduction = document.getElementById("introduction");
      introduction.classList.add("hidden");
      
      // starting a new game
      const game = new Game(canvas.width, canvas.height);
      new GameView(game, ctx).start();
    }
    
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startGame);
  });
