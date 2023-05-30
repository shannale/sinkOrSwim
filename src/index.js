import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";

export function drawImageOnCanvas(ctx, img, canvas) {
  const scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);
  const scaledWidth = img.width * scaleFactor;
  const scaledHeight = img.height * scaleFactor;
  const x = (canvas.width - scaledWidth) / 2;
  const y = (canvas.height - scaledHeight) / 2;

}

// set background
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    resizeCanvas();

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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

  // let playAgainButton = document.getElementById("play-again-button");

  // playAgainButton.addEventListener("click", () => { 
  //   game.restart();

  // });



