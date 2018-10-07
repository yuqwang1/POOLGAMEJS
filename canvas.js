class Canvas2D {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvasContext = this.canvas.getContext('2d');
  }


  clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawImage(image, position, origin, rotation = 0) {
    if (!position) {
      postion = new Vector();
    }
    if (!origin) {
      origin = new Vector();
    }
    this.canvasContext.save();
    this.canvasContext.translate(position.x, position.y);
    this.canvasContext.rotate(rotation);
    this.canvasContext.drawImage(image, -origin.x, -origin.y);
    this.canvasContext.restore();
  }
}

let Canvas = new Canvas2D();
