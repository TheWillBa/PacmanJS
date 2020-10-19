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
}
