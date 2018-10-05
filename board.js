class Board {
  constructor () {
    this.stick = new Stick();
  }
 update() {
   this.stick.update();
 }

 draw() {
   Canvas.drawImage(elements.background, {x:0, y:0});
   this.stick.draw();
 }
}
