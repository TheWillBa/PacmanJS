

class Points{
    constructor(x, y, val, type){
        this.x = x;
        this.y = y;
        this.sizeX = blockSize/8; // only for pellets, change later
        this.sizeY = blockSize/8; // only for pellets, change later
        this.val = val;
        this.type = type;
    }
}


class Wall{
    constructor(x, y, sizeX, sizeY){
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
}
