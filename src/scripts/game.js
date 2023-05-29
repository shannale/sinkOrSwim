import Timer from './timer';

class Game {
    constructor(canvasWidth, canvasHeight) {
        this.pondTop = 0.2 * canvasHeight;
        this.pondBot = 0.8 * canvasHeight;
        this.pondLeft = 0.3 * canvasWidth; 
        this.pondRight = 0.7 * canvasWidth;

        // keep track of score and strikes 
        this.score = 0;
        this.strikes = 0;
    };

    draw(ctx) {
        this.drawRipples(ctx);
    };

    randomLocation() {
        const randY = Math.random() * (this.pondBot - this.pondTop) + this.pondTop;
        const randX = Math.random() * (this.pondRight - this.pondLeft) + this.pondLeft; 

        return [randX, randY];
    }

    drawRipples(ctx) {
        ctx.strokeStyle = "white";
        ctx.beginPath();
        const position = this.randomLocation(); 
        ctx.arc(
          position[0], position[1], 50, 0, 2 * Math.PI, true
        );
        ctx.stroke();
    }

    

}

export default Game; 