import Fish from "./fish.js"

class Ripples {
    constructor(game, ctx){ 
      // randomize location (x,y)
      // randomize timer (seconds)
        this.game = game;
        this.canvas = document.getElementById("canvas");
        console.log(this.canvas)

        this.position = this.randomLocation(game);
        this.fish = new Fish(this.position[0], this.position[1])
        this.drawRipple(ctx);
        this.ripple_timer = this.randomRippleTimer();
        this.pull_timer = this.randomPullTimer();
        this.clicked = false;

        let self = this;
        setTimeout(function(){
            self.drawPull();
        }, self.ripple_timer * 1000);
 }

    deleteRipple(ctx){
        console.log("delete ripple")
        ctx.clearRect(
            this.position[0] - 55, this.position[1] - 55, 150, 150
          );
        let pull_warning = document.getElementById("pull_warning");
        pull_warning.style.visibility = 'hidden';
    }

    stillAlive(){
        if(!this.clicked){
            if(this.pull_timer === 0)
                return false;
            else {
                this.pull_timer--;
                return true;
            }
        }
        return false
    }

    clickPull() {
        this.clicked = true;
        this.game.score++;
    }

    drawPull() {

        // pull warning class
        let pull_warning = document.getElementById("pull_warning")
        console.log(pull_warning.style.visibility);
        pull_warning.style.visibility = 'visible';
 
        let desiredX = this.position[0];
        let desiredY = this.position[1];
        console.log(desiredX)
        console.log(desiredY)
        let self = this;
        let fish = document.getElementById("fish");

        // click event listener to ripple
        fish.addEventListener('click', function(event) {

            // click event coordinates 
            let clickedX = event.clientX;
            let clickedY = event.clientY;
            // clickedY = clickedY - 100;
            console.log(desiredX);
            console.log(desiredY);
            console.log(clickedX);
            console.log(clickedY);
            if(desiredX >= 0 && desiredY >= 0){
                // check coordinates w position 
                if (clickedX <= desiredX + 200 && clickedX >= desiredX - 200 && clickedY >= desiredY - 200 && clickedY <= desiredY + 200) {
                    // click event 
                    self.clickPull()
                    desiredX = -1;
                    desiredY = -1;
                }
            }
        });
    }

    randomLocation(game) {
        const randY = Math.random() * (game.pondBot - game.pondTop) + game.pondTop;
        const randX = Math.random() * (game.pondRight - game.pondLeft) + game.pondLeft; 

        return [randX, randY];
    }

    // number of seconds until pull shows up
    randomRippleTimer() {
        return Math.ceil(Math.random() * 4);
    }

    // seconds for allotted time to click 
    randomPullTimer() {
        return Math.ceil(Math.random() * 2) + 2;
    }

    drawRipple(ctx) {
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(
          this.position[0], this.position[1], 50, 0, 2 * Math.PI, true
        );
        ctx.stroke();
    }
}

export default Ripples;