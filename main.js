const gridX = 15;
const gridY = 15;

const xOffset = 50;
const yOffset = 50;

const blockSize = 50;
const gridWidthRaw = gridX * blockSize;
const gridHeightRaw = gridY * blockSize;

const gridHeight = gridHeightRaw + yOffset;
const gridWidth = gridWidthRaw + xOffset;

const canvas = document.getElementById("canvas");
canvas.width = xOffset * 2 + gridWidthRaw;
canvas.height = yOffset * 2 + gridHeightRaw;
const ctx = canvas.getContext("2d");



// Entry into the game

let GAME = new Game();

let playing = true;




// User Input

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(key) {

  if (key.keyCode == 81) {//q pause
    playing = !playing
  }

  if (key.keyCode == 82) {
    // r reset
    GAME = new Game(speed);
  }

  if (!playing) return;

  if (key.keyCode == 65) { // switch?
    // a   left
    GAME.pacman.left();
  }
  else if (key.keyCode == 68) {
    // d  right
    GAME.pacman.right();

  }
  else if (key.keyCode == 87) {
    // w  up
    GAME.pacman.up();
  }
  else if (key.keyCode == 83) {
    // s  down
    GAME.pacman.down();
  }
  else if (key.keyCode == 70) {
    // f  store
  }
  else if (key.keyCode == 32) {
    // space smash
  }



}



// Game Loop

window.main = function () {
  window.requestAnimationFrame(main);

  if (playing) {
    // Whatever your main loop needs to do
    GAME.tick();
    drawGame(GAME);

    //print(WORLD.activeTetrino.pX)
  }
};

main(); // Start the cycle




