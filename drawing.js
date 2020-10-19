
function drawGame(game) {

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
  


    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText(game.points,xOffset + gridWidthRaw/2, yOffset/1.5);

    drawBoard(game.board);
    drawPacman(game.pacman);

  
  
  }

  function drawBoard(b){
    for(let p of b.pellets){
      drawPellet(p);
    }
  }


  function drawPacman(man){

    ctx.beginPath();
    let cX = man.x + blockSize/2;
    let cY = man.y + blockSize/2;
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    let xRot;
    if(man.vX >= 0){
      xRot = 0
    }else{
      xRot = Math.PI
    }
    ctx.arc(cX, cY, blockSize/2,
       man.mouthAngleMax/2 * man.mouthPercent() 
       + man.vY * Math.PI/4 
       + xRot, // handle x velocity
      2 * Math.PI 
      - man.mouthAngleMax/2  * man.mouthPercent()
      + man.vY * Math.PI/4
      + xRot);
    ctx.lineTo(cX,cY);
    ctx.fill();
  }


  function drawPellet(p){
    let pelletSize = blockSize/8;
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(p.x, p.y, pelletSize, pelletSize);
    ctx.fill();
  }
  
  
  function drawBlock(b) {
    ctx.beginPath();
    ctx.fillStyle = b.color;
    ctx.strokeStyle = "black";
    ctx.rect(b.x, b.y, b.size, b.size);
    ctx.fill();
    ctx.stroke();
  }
  
  
  
  function drawGrid() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.rect(xOffset, yOffset, gridWidthRaw, gridHeightRaw);
    ctx.stroke();
  }
  
  
  function drawGridlines() {
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    for (let i = yOffset; i < gridHeight; i += blockSize) {
      ctx.moveTo(xOffset, i);
      ctx.lineTo(gridWidth, i);
    }
  
    for (let i = xOffset; i < gridWidth; i += blockSize) {
      ctx.moveTo(i, yOffset);
      ctx.lineTo(i, gridHeight);
    }
  
    ctx.rect(xOffset, yOffset, gridWidthRaw, gridHeightRaw);
    ctx.stroke();
  }