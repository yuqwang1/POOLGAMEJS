class Score{
  constructor(){
    this.value = 0;
  }

  reset() {
    this.value = 0;
  }

  draw() {
    Canvas.fillText(
      this.value,
      "white",
      "top",
      "Impact",
      "200px"
    )
  }

  drawBorder(color) {
    for(let i=0; i<this.value; i++){

      let pos = this.position.add(new Vector2(i*15,0));

      Canvas.drawText(
          "I",
          pos,
          this.origin,
          color,
          "top",
          "Arial",
          "20px"
      );
    }
  }

  increment() {
    this.value++;
  }
}
