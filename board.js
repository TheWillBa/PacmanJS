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
            pellets.push(new Points(100, 100 + i * blockSize/2, 1, "Pellet")) // testing only
        }
        this.pellets = pellets;


        this.walls = [new Wall(200, 100, 50, 75)];
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