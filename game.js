// A class to hold the main game state

/**
 * Must contain:
 * Player
 * Ghosts
 * Board
 *    - Layout, pellets
 * Score (part of player?)
 */


class Game{
    constructor(){
        this.pacman = new Pacman();
        this.board = new Board();
        this.level = 0;
        this.points = 0;
    }

    tick(){
        this.pacman.tick();
        this.points += this.board.clearPoints(this.pacman);
        console.log(this.points)
    }
}
