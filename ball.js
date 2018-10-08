const BALL_ORIGIN = new Vector(13,13);
const BALL_DIAMETER = 25;

class Ball {
  constructor(position, color){
    this.position = position;
    this.velocity = new Vector();
    this.moving = false;
    this.color = getBallByColor(color);
  }

  update(quantity) {
    // debugger

    this.position.accumulate(this.velocity.multiply(quantity));
    this.velocity = this.velocity.multiply(0.98);
    if (this.velocity.length() < 5) {
      this.velocity = new Vector();
      this.moving = false;
    }
  }

  draw() {
    Canvas.drawImage(this.color, this.position, BALL_ORIGIN);
  }

  shoot(power, rotation) {
    // debugger
    this.velocity = new Vector(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
  }

  collide(ball) {
    // find a normal vector
    const n = this.position.subtract(ball.position);
    // find the distance
    const dist = n.length();
    // no collision at all
    if (dist > BALL_DIAMETER) {
      return;
    }
  }
}
