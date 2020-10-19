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
    constructor(){
        this.x = 0;
        this.y = 0;
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
        
    }

    tick(){
        this.move();
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
        this.vX = xDir * this.maxVelocity;
        this.vY = yDir * this.maxVelocity;
    }

    isOn(obj){ // obj must have an x, y, and a sizeX, and a sizeY

        // checks all four corner of the grid-based object
        for(let i = 0; i <= 1; i++){
            for(let j = 0; j <= 1; j++){
                let currentX = obj.x + obj.sizeX * i;
                let currentY = obj.y + obj.sizeY * i;
                if(this.x <= currentX && currentX <= this.x + this.size &&
                    this.y <= currentY && currentY <= this.y + this.size){
                        return true;
                    }
            }
        }

        return false;
    }

}
