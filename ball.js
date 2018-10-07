const BALL_ORIGIN = new Vector(13,13);


class Ball {
  constructor(position){
    this.position = position;
    this.velocity = new Vector();
    this.moving = false;
  }

  update(quantity) {
    // debugger

    this.position.combine(this.velocity.multiply(quantity));
    this.velocity = this.velocity.multiply(0.98);
    if (this.velocity.length() < 5) {
      this.velocity = new Vector();
      this.moving = false;
    }
  }

  draw() {
    Canvas.drawImage(elements.whiteball, this.position, BALL_ORIGIN);
  }

  shoot(power, rotation) {
    // debugger
    this.velocity = new Vector(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
  }
}
