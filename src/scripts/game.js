class Game {
    constructor(canvasWidth, canvasHeight) {
        this.pondTop = 0.2 * canvasHeight;
        this.pondBot = 0.8 * canvasHeight;
        this.pondLeft = 0.3 * canvasWidth; 
        this.pondRight = 0.7 * canvasWidth;
    };

    draw(ctx) {
        this.drawRipples(ctx);
    };

    randomLocation() {
        const randX = Math.random(this.pond)
    }

    drawRipples(ctx) {
        ctx.strokeStyle = "white";

        ctx.beginPath();
        ctx.arc(
          700, 650, 50, 0, 2 * Math.PI, true
        );
        ctx.stroke();
    }



}

export default Game; 