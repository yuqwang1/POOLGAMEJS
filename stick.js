const STICK_ORIGIN = new Vector(556, 7)
const STICK_SHOT_ORIGIN = new Vector(549, 7)

class Stick {
  constructor (position, onShoot) {
    this.position = position;
    this.rotation = 0;
    this.origin = STICK_ORIGIN.duplicate();
    this.power = 0;
    this.onShoot = onShoot;
    this.action = false;
  }

  update () {
    if (this.action === true) return;
    if (Mouse.left.down) {
      this.increasePower();
    } else if (this.power > 0) {
      this.shoot();
    }
    this.rotationUpdate();
  }

  draw () {
    Canvas.drawImage(elements.stick, this.position, this.origin, this.rotation);
  }

  rotationUpdate() {
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent);
  }

  increasePower () {
    if (this.power > 8000) {
      return;
    }
    this.power += 150;
    this.origin.x += 5;
  }

  shoot () {
    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_ORIGIN.duplicate();
    this.action = true;
  }

  reposition (position) {
    this.position = position.duplicate();
    this.origiin = STICK_ORIGIN.duplicate();
    this.action = false;
  }
}
