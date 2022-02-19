const body = document.querySelector("body");

const IMG_NUMBER = 4;
 
function paintImage(imgNumber) {
  const image = new Image();
  body.style.backgroundImage = `url('img/bg-img-${imgNumber + 1}.jpg')`;
}
 
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
 
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
 
init();