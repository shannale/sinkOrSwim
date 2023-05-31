import Ripples from "./ripple.js";
import Fish from "./fish.js"

class Game {
    constructor(canvasWidth, canvasHeight) {
        this.pondTop = 0.2 * canvasHeight;
        this.pondBot = 0.8 * canvasHeight;
        this.pondLeft = 0.3 * canvasWidth; 
        this.pondRight = 0.7 * canvasWidth;

        // keep track of score and strikes 
        this.score = 0;
        this.strikes = 0;
        this.has_ripple = false;
        this.ripple;
        this.stopped = false;
    };

    draw(ctx) {
        if (this.strikes === 3) {
            return;
        }
        if(!this.has_ripple) {
            if(this.ripple){
                this.ripple.fish.deleteFish();
            }
            this.has_ripple = true;
            this.ripple = new Ripples(this, ctx);
        }
        else{
            if(!this.ripple.stillAlive()){
                this.ripple.deleteRipple(ctx);
                if(!this.ripple.clicked){
                    this.strikes++;
                    console.log(this.strikes)
                    let strike_box = document.getElementById("strikes");
                    let strike = document.createElement('img');
                    strike.style.width = '100px';
                    strike.style.height = '100px';
                    strike.src = 'pictures/strike.png';
                    strike_box.appendChild(strike);
                }
                else{
                    this.ripple.fish.showFish();
                }
                this.has_ripple = false;
            }
            if(!this.stopped && this.strikes === 3) {
                this.stopped = true;
                console.log("game ended");
                this.end();
            };
        }
        let score = document.getElementById("score");
        score.innerHTML = this.score;

        let endScore = document.getElementById("endScore");
        endScore.innerHTML = this.score;
    };

    end() {
        let loser = document.getElementById("game-over-title");
        let loserScore = document.getElementById("game-over-description");
        let loserButton = document.getElementById("game-over-button");
        let endGameContent = document.getElementById("end-game");

        loser.classList.remove("hidden");
        loserScore.classList.remove("hidden");
        loserButton.classList.remove("hidden");
        endGameContent.classList.remove("hidden");

        let strike_box = document.getElementById("strikes");
        strike_box.style.visibility = "hidden";


    };

}


export default Game; 