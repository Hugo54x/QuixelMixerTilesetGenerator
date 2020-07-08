let rem = 16;
let ui;

function preload() {

}

function setup() {
  let dim = getWindowSize()
  can = createCanvas(dim[0], dim[1]);
  can.parent("#p5");
  ui = new UIManager(dim[0], dim[1]);
  ui.setup();
}

function draw() {
  if (mouseX <= this.width && mouseY <= this.height) {
      ui.onHover(mouseX, mouseY);
  }
  frameRate(1);
  background(255);
  ui.draw();
}

function mousePressed() {
  ui.onClicked(mouseX, mouseY);
}

function windowResized() {
  newDim = getWindowSize();
  resizeCanvas(newDim[0], newDim[1]);
  ui.update(newDim[0], newDim[1]);
}

function getWindowSize() {
  let aspectRatio = [16,9]
  let canvasDiv = document.getElementById("p5");
  width = canvasDiv.offsetWidth - 2*3*rem;
  height = (width/aspectRatio[0])*aspectRatio[1];
  if (height >600){
    height = 600
    width = (height/aspectRatio[1])*aspectRatio[0];
  }
  else {}
  return [width,height]
}
