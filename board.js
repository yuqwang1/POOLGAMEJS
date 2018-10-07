const DELTA = 0.01;

class Board {
  constructor () {
    // debugger
    this.whiteball = new Ball(new Vector(300,250));
    // this.yellowball = new Ball(new Vector(300,300));
    this.stick = new Stick(new Vector(300,250), this.whiteball.shoot.bind(this.whiteball));
  }

 update() {
   this.stick.update();
   this.whiteball.update(DELTA);
   // this.yellowball.update(DELTA);
   if (!this.ballsMoving() && this.stick.action) {
     this.stick.reposition(this.whiteball.position);
   }
 }

 draw() {
   // debugger
   Canvas.drawImage(elements.background, {x:0, y:0});
   this.stick.draw();
   this.whiteball.draw();
   // this.yellowball.draw();
 }

 ballsMoving() {
   return this.whiteball.moving
 }
}
