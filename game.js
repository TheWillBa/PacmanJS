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

        this.board = new Board();
        this.pacman = new Pacman(blockSize+1, blockSize+1, this.board);
        this.level = 0;
        this.points = 0;
    }

    tick(){
        this.pacman.tick(this);
        this.points += this.board.clearPoints(this.pacman);
    }
}
