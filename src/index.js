import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";

// set background
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.src = 'pictures/pond.png';
  
    img.onload = () => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      drawImageOnCanvas();
    };
  
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
  });

// for game
document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  
  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});

// instructions introduction box 
document.addEventListener("DOMContentLoaded", () => {
  // let game = new Game();

  let startButton = document.getElementById("start-button");

  startButton.addEventListener("click",startGame)

});


const startGame = (e) => {
  let start = document.getElementById("introduction");
  start.classList.add("hidden");
}


