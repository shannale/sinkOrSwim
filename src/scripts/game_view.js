class GameView {
    constructor (game, ctx) {
        this.ctx = ctx; 
        this.game = game;
    }

    start() {
        this.lastTime = 0;
        // start the animation
        requestAnimationFrame(this.animate.bind(this));
    }
    
    animate(time) {
        const timeDelta = time - this.lastTime;

        // this.game.step(timeDelta);
        if (timeDelta > 1000) {
            this.game.draw(this.ctx);
            this.lastTime = time;
        }

        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    }

}

export default GameView;