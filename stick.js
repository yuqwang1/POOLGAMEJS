class Stick {
  constructor () {
    this.position = {x:0, y:250};
  }

  update () {
    this.position = Mouse.position;
    if (Mouse.left.pressed) {
      console.log('left pressed');
    }
  }

  draw () {
    Canvas.drawImage(elements.stick, this.position);
  }

}
