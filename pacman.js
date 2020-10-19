// Contains the state of the pacman (the player controller character)

/**
 * Must contain:
 * Location on the board
 * Velocity (x and y)
 * isDead
 * powered up? (in here, game?, ghosts scared?)
 * score
 * lives
 */

class Pacman{
    constructor(x, y, board){
        this.x = x;
        this.y = y;
        this.size = blockSize;


        this.vX = 0;
        this.vY = 0;
        this.nextvX = 0;
        this.nextvY = 0;
        this.maxVelocity = 2;

        // For tracking mouth movement
        this.mouthCount = 0;
        this.mouthIncrement = 0.1;
        this.mouthAngleMax = Math.PI/2;

        this.board = board; // weird
        
    }

    tick(game){
        if(new Pacman(this.x + this.nextvX, this.y + this.nextvY, this.board).canMove(this.board)){ // look ahead
            this.vX = this.nextvX;
            this.vY = this.nextvY;
            this.move();
        }
        else if(this.canMove(game.board)){
            this.move();
        }
        


    }

    canMove(board){
        let nextMan = new Pacman(this.x + this.vX, this.y + this.vY);
        for(let w of board.walls){
            if(nextMan.isOn(w)) return false;
        }
        // handle check for cached move
        return true;
    }

    mouthPercent(){
        return Math.sin(this.mouthCount);
    }

    move(){
        this.x += this.vX;
        this.y += this.vY;
        this.tickMouth();
        
    }

    tickMouth(){
        if(this.vX === 0 && this.vY === 0) return;
        
        this.mouthCount += this.mouthIncrement;

        if(this.mouthCount >= Math.PI){
            this.mouthCount = 0;
        }
        
    }

    up(){
        this.setVelocity(0,-1);
    }

    down(){
        this.setVelocity(0,1);
    }

    left(){
        this.setVelocity(-1,0);
    }

    right(){
        this.setVelocity(1,0);
    }

    setVelocity(xDir,yDir){
        if(new Pacman(this.x + xDir * this.maxVelocity, this.y + yDir * this.maxVelocity, this.board).canMove(this.board)){
            this.vX = xDir * this.maxVelocity;
            this.vY = yDir * this.maxVelocity;
            this.nextvX = xDir * this.maxVelocity;
            this.nextvY = yDir * this.maxVelocity;
        }
        else{
            this.nextvX = xDir * this.maxVelocity;
            this.nextvY = yDir * this.maxVelocity;
        }

    }

    isOn(obj){ // obj must have an x, y, and a sizeX, and a sizeY

        // checks all four corner of the grid-based object
        for(let i = 0; i <= 1; i++){
            for(let j = 0; j <= 1; j++){
                let currentX = obj.x + obj.sizeX * i;
                let currentY = obj.y + obj.sizeY * j;
                if(this.x <= currentX && currentX <= this.x + this.size &&
                    this.y <= currentY && currentY <= this.y + this.size){
                        return true;
                }
            }
        }

        
        for(let i = 0; i <= 1; i++){
            for(let j = 0; j <= 1; j++){
                let currentX = this.x + this.size * i;
                let currentY = this.y + this.size * j;
                if(obj.x <= currentX && currentX <= obj.x + obj.sizeX &&
                    obj.y <= currentY && currentY <= obj.y + obj.sizeY){
                        return true;
                    }
            }
        } 

        return false;
    }

}
