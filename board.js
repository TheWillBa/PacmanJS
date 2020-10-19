// A class denoting a pacman board

/**
 * Must contain:
 * Pellets
 * Power pellets
 * Walls (general layout)
 */

 class Board{
     constructor(){ // handle templates?
        let pellets = [];
        for(let i = 0; i < 10; i++){
            pellets.push(new Points(100 - blockSize/2 - blockSize/8, 100 + i * blockSize/2 - blockSize/8, 1, "Pellet")) // testing only
        }
        this.pellets = pellets;


        this.walls = [
            new Wall(0, 0, blockSize, 300),
            new Wall(0, 0, 300, blockSize),
            new Wall(2*blockSize+2, 2*blockSize+2, blockSize, 300),
            new Wall(2*blockSize+2, 2*blockSize+2, 300, blockSize)];

        this.gridX = gridX;
        this.gridY = gridY;
     }

     // Removes points the pacman is on and returns the number of points cleared
     clearPoints(pacman){
         let sum = 0;
        for(let i = this.pellets.length - 1; i >= 0; i--){
            if(pacman.isOn(this.pellets[i])){
                sum += this.pellets[i].val;
                this.pellets.splice(i,1);
            }
        }

        return sum;
     }


 }