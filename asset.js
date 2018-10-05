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
  assetsLoadingLoop(callback);
}
