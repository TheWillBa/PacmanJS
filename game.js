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
        this.pacman = new Pacman(this.board.startX, this.board.startY, this.board);
        this.level = 0;
        this.points = 0;
    }

    tick(){
        this.pacman.tick(this);
        this.points += this.board.clearPoints(this.pacman);
        if(this.levelOver()){
            this.level++;
            this.nextLevel();
        }
    }

    levelOver(){
        return this.board.isClear();
    }

    nextLevel(){
        this.board = new Board();
        this.pacman = new Pacman(this.board.startX, this.board.startY, this.board);
    }
}
