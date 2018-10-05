class Game {
  init() {
    this.board = new Board();
  }


  start() {
    PoolGame.init();
    PoolGame.mainLoop();
  }

  mainLoop() {
    Canvas.clear();
    PoolGame.board.update();
    PoolGame.board.draw();
    Mouse.reset();
    requestAnimationFrame(PoolGame.mainLoop);
  }
}

let PoolGame = new Game();
