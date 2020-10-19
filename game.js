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
    }

    tick(){
        this.pacman.tick();
    }
}
