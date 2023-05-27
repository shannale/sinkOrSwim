class Game {
    constructor() {
        this.fish = fish
    }
    static DIM_X = 500;
    static DIM_Y = 500;
    static BG_COLOR = "#000000";

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
        // this.allObjects().forEach((object) => {
        //   object.draw(ctx);
        // });
    };

}

export default Game; 