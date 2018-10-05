class Canvas2D {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvasContext = this.canvas.getContext('2d');
  }


  clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawImage(image, position) {
    this.canvasContext.drawImage(image, position.x, position.y);
  }
}

let Canvas = new Canvas2D();
