class Vector {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  duplicate () {
    return new Vector(this.x, this.y);
  }

  accumulate (vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  sum (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  subtract (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  dot_product (vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  multiply(quantity) {
    return new Vector(this.x * quantity, this.y * quantity);
  }

  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  distForm(vector) {
    return this.subtract(vector).length();
  }
}
