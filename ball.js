// TOP: 93,
// LEFT: 113,
// BOTTOM: 410,
// RIGHT: 893

const BALL_ORIGIN = new Vector(13,13);
const BALL_DIAMETER = 25;
const POCKET_POSITION = [
  new Vector(113, 93),
  new Vector(503, 93),
  new Vector(893, 93),
  new Vector(113, 410),
  new Vector(503, 410),
  new Vector(893, 410),
]

POCKET_RADIUS = 20;
class Ball {
  constructor(position, color){
    this.position = position;
    this.velocity = new Vector();
    this.moving = false;
    this.color = getBallByColor(color);
    this.visible = true;
  }

  update(quantity) {
    // debugger
    if (!this.visible) {
      return;
    }
    this.position.accumulate(this.velocity.multiply(quantity));
    this.velocity = this.velocity.multiply(0.99);
    if (this.velocity.length() < 30) {
      this.velocity = new Vector();
      this.moving = false;
    }
  }

  draw() {
    if (!this.visible) {
      return;
    }
    Canvas.drawImage(this.color, this.position, BALL_ORIGIN);
  }

  shoot(power, rotation) {
    // debugger
    this.velocity = new Vector(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
  }

  collideWith(table) {
    if (!this.moving || !this.visible) {
      return;
    }

    let collided = false;
    if (this.position.y <= table.TOP + BALL_DIAMETER/2) {
      this.position.y = table.TOP + BALL_DIAMETER/2;
      this.velocity = new Vector(this.velocity.x, -this.velocity.y);
      collided = true;
    } else if (this.position.y >= table.BOTTOM - BALL_DIAMETER/2) {
      this.position.y = table.BOTTOM - BALL_DIAMETER/2;
      this.velocity = new Vector(this.velocity.x, -this.velocity.y);
      collided = true;
    } else if (this.position.x <= table.LEFT + BALL_DIAMETER/2) {
      this.position.x = table.LEFT + BALL_DIAMETER/2;
      this.velocity = new Vector(-this.velocity.x, this.velocity.y);
      collided = true;
    } else if (this.position.x >= table.RIGHT - BALL_DIAMETER/2) {
      this.position.x = table.RIGHT - BALL_DIAMETER/2;
      this.velocity = new Vector(-this.velocity.x, this.velocity.y);
      collided = true;
    }

    if (collided) this.velocity = this.velocity.multiply(0.98);
  }

  collide(ball) {
    if (!this.visible || !ball.visible) {
      return;
    }
    // find a normal vector
    const n = this.position.subtract(ball.position);
    // find the distance
    const dist = n.length();
    // no collision at all
    if (dist > BALL_DIAMETER) {
      return;
    }
    //minimum translation distance to avoid overlap;
    const mini_translation_distance = n.multiply((BALL_DIAMETER - dist)/dist)
    this.position = this.position.sum(mini_translation_distance.multiply(1/2));
    ball.position = ball.position.subtract(mini_translation_distance.multiply(1/2));
    // find unit normal vector
    const unit_normal_vector = n.multiply(1/n.length());
    const unit_tangent_vector = new Vector(- unit_normal_vector.y, unit_normal_vector.x);
    const v1n = unit_normal_vector.dot_product(this.velocity);
    const v1t = unit_tangent_vector.dot_product(this.velocity);
    const v2n = unit_normal_vector.dot_product(ball.velocity);
    const v2t = unit_tangent_vector.dot_product(ball.velocity);
    // new normal velocities;
    let v1nt = v2n;
    let v2nt = v1n;
    //convert to vectors
    v1nt = unit_normal_vector.multiply(v1nt);
    const v1tt = unit_tangent_vector.multiply(v1t);
    v2nt = unit_normal_vector.multiply(v2nt);
    const v2tt = unit_tangent_vector.multiply(v2t);

    this.velocity = v1nt.sum(v1tt);
    ball.velocity = v2nt.sum(v2tt);

    this.moving = true;
    ball.moving = true;
  }

  ballInPocket() {
    if (!this.visible) {
      return;
    }
    let inPocket = POCKET_POSITION.some(pocket => {
      return this.position.distFrom(pocket) < POCKET_RADIUS;
    });

    if (!inPocket) {
      return;
    }

    this.visible = false;
    this.moving = false;
  }

}
