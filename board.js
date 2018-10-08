const DELTA = 0.004;

class Board {
  constructor () {
    // debugger
    this.balls = [
      [new Vector(650, 250), BALL_COLOR.YELLOW1],
      [new Vector(674, 236), BALL_COLOR.BROWN],
      [new Vector(674, 264), BALL_COLOR.PURPLE1],
      [new Vector(698, 222), BALL_COLOR.BROWN1],
      [new Vector(698, 250), BALL_COLOR.BLACK],
      [new Vector(698, 278), BALL_COLOR.YELLOW],
      [new Vector(722, 208), BALL_COLOR.GREEN],
      [new Vector(722, 236), BALL_COLOR.BLUE1],
      [new Vector(722, 264), BALL_COLOR.RED],
      [new Vector(722, 292), BALL_COLOR.GREEN1],
      [new Vector(746, 194), BALL_COLOR.RED1],
      [new Vector(746, 222), BALL_COLOR.BLUE],
      [new Vector(746, 250), BALL_COLOR.ORANGE1],
      [new Vector(746, 278), BALL_COLOR.PURPLE],
      [new Vector(746, 306), BALL_COLOR.ORANGE],
      [new Vector(300, 250), BALL_COLOR.WHITE]
    ].map(params => new Ball(params[0], params[1]))
    this.whiteball = this.balls[15];
    // this.yellowball = new Ball(new Vector(300,300));
    this.stick = new Stick(new Vector(300,250), this.whiteball.shoot.bind(this.whiteball));
    this.poolTable = {
      TOP: 93,
      LEFT: 113,
      BOTTOM: 410,
      RIGHT: 893
    }
  }

  handleCollisions() {
    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].ballInPocket();
      this.balls[i].collideWith(this.poolTable);
      for (let j = i + 1; j < this.balls.length; j++) {
        const firstBall = this.balls[i];
        const secondBall = this.balls[j];
        firstBall.collide(secondBall);
      }
    }
  }

 update() {
   this.handleCollisions();
   this.stick.update();
   for (let i = 0; i < this.balls.length; i++) {
     this.balls[i].update(DELTA);
   }
   // this.balls[15].update(DELTA);
   // this.yellowball.update(DELTA);
   if (!this.ballsMoving() && this.stick.action) {
     this.stick.reposition(this.whiteball.position);
   }
 }

 draw() {
   // debugger
   Canvas.drawImage(elements.background, {x:0, y:0});
   this.stick.draw();
   // this.balls[15].draw();
   for (let i = 0; i < this.balls.length; i++) {
     this.balls[i].draw();
   }
   // this.yellowball.draw();
 }

 ballsMoving() {
   let ballsMoving = false;
   for (let i = 0; i < this.balls.length; i++) {
     if (this.balls[i].moving) {
       ballsMoving = true;
       break;
     }
   }
   return ballsMoving;
 }
}
