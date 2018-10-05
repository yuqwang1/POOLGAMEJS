class ButtonState {
  constructor () {
    this.down = false;
    this.pressed = false;
  }
}

class MouseHandler {
  constructor() {
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();
    this.position = new Vector();

    document.onmousemove = handleMouseMove;
    document.onmouseUp = handleMouseUp;
    document.onmouseDown = handleMouseDown;
  }


  reset() {
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
  }
}

let Mouse = new MouseHandler();

function handleMouseMove(event) {
  let coodX = event.pageX;
  let coodY = event.pageY;
  Mouse.position = new Vector(coodX, coodY);
}

function handleMouseDown(event) {
  handleMouse(event);
  switch (event.which) {
    case 1:
      if (Mouse.left.down) {
        Mouse.left.pressed = true;
      }
      break;
    case 2:
      if (Mouse.middle.down) {
        Mouse.middle.pressed = true;
      }
      break;
    case 3:
      if (Mouse.right.down) {
        Mouse.right.pressed = true;
      }
      break;
  }
}

function handleMouseUp(event) {
  handleMouse(event);
  switch (event.which) {
    case 1:
      Mouse.left.down = false;
      break;
    case 2:
      Mouse.middle.down = false;
      break;
    case 3:
      Mouse.right.down = false;
      break;
    }
}
