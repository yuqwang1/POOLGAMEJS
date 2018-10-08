let elements = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback) {
  if(assetsStillLoading){
    requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
  }
  else {
    callback();
  }
}

function loadAssets(callback) {
  function loadElements(fileName) {
    assetsStillLoading++
    let elementImage = new Image();
    elementImage.src = './img/' + fileName;

    elementImage.onload = function() {
      assetsStillLoading--;
    }
    return elementImage;
  }
  elements.background = loadElements('poolview.jpg');
  elements.stick = loadElements('stick.png');
  elements.whiteball = loadElements('white1.png');
  elements.yellowball = loadElements('yellow.png');
  elements.blackball = loadElements('black.png');
  elements.purpleball = loadElements('purple.png');
  elements.redball = loadElements('red.png');
  elements.greenball = loadElements('green.png');
  elements.brownball = loadElements('brown.png');
  elements.orangeball = loadElements('orange.png');
  elements.blueball = loadElements('blue.png');
  elements.brownball1 = loadElements('brown1.png');
  elements.yellowball1 = loadElements('yellow1.png');
  elements.orangeball1 = loadElements('orange1.png');
  elements.purpleball1 = loadElements('purple1.png');
  elements.redball1 = loadElements('red1.png');
  elements.greenball1 = loadElements('green1.png');
  elements.blueball1 = loadElements('blue1.png');
  assetsLoadingLoop(callback);
}

function getBallByColor(color) {
  switch (color) {
    case BALL_COLOR.RED:
      return elements.redball;
      break;
    case BALL_COLOR.BROWN:
      return elements.brownball;
      break;
    case BALL_COLOR.GREEN:
      return elements.greenball;
      break;
    case BALL_COLOR.BLUE:
      return elements.blueball;
      break;
    case BALL_COLOR.ORANGE:
      return elements.orangeball;
      break;
    case BALL_COLOR.BLACK:
      return elements.blackball;
      break;
    case BALL_COLOR.YELLOW:
      return elements.yellowball;
      break;
    case BALL_COLOR.WHITE:
      return elements.whiteball;
      break;
    case BALL_COLOR.PURPLE:
      return elements.purpleball;
      break;
    case BALL_COLOR.RED1:
      return elements.redball1;
      break;
    case BALL_COLOR.BROWN1:
      return elements.brownball1;
      break;
    case BALL_COLOR.GREEN1:
      return elements.greenball1;
      break;
    case BALL_COLOR.BLUE1:
      return elements.blueball1;
      break;
    case BALL_COLOR.ORANGE1:
      return elements.orangeball1;
      break;
    case BALL_COLOR.YELLOW1:
      return elements.yellowball1;
      break;
    case BALL_COLOR.PURPLE1:
      return elements.purpleball1;
      break;

  }
}
