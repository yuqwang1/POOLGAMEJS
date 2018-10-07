function handleMouseMove(event) {
  // debugger
  let coodX = event.pageX;
  let coodY = event.pageY;
  Mouse.position = new Vector(coodX, coodY);
}


function handleMouseDown(event) {
  handleMouseMove(event);
  switch (event.button) {
    case 0:
      if (!Mouse.left.down) {
        // debugger
        Mouse.left.pressed = true;
        Mouse.left.down = true;
      }
      break;
    case 1:
      if (!Mouse.middle.down) {
        Mouse.middle.pressed = true;
        Mouse.left.down = true;
      }
      break;
    case 2:
      if (!Mouse.right.down) {
        Mouse.right.pressed = true;
        Mouse.left.down = true;
      }
      break;
  }
}



function handleMouseUp(event) {
  handleMouseMove(event);
  switch (event.button) {
    case 0:
      Mouse.left.down = false;
      break;
    case 1:
      Mouse.middle.down = false;
      break;
    case 2:
      Mouse.right.down = false;
      break;
    }
}



class ButtonState {
  constructor() {
    this.down = false;
    this.pressed = false;
  }
}

class MouseHandler{
  constructor(){
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();
    this.position = new Vector();
    // debugger
    document.onmousemove = handleMouseMove;
    document.onmouseup = handleMouseUp;
    document.onmousedown = handleMouseDown;

    }

  reset (){
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
  }
}


let Mouse = new MouseHandler();
