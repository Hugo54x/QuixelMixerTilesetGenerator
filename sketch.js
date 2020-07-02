
function preload() {

}

function setup() {
  let dim = getWindowSize()
  can = createCanvas(dim[0], dim[1]);
  can.parent("#p5");

}

function draw() {
  frameRate(1);
  background(128);
}

function windowResized() {
  dim = getWindowSize();
  resizeCanvas(dim[0], dim[1]);
}

 function getWindowSize() {
   let rem = 16;
   let aspectRatio = [16,9]
   let canvasDiv = document.getElementById("p5");
   width = canvasDiv.offsetWidth - 2*3*rem;
   height = (width/aspectRatio[0])*aspectRatio[1];
   console.log(height);
   if (height >600){
     height = 600
     width = (height/aspectRatio[1])*aspectRatio[0];
   }
   else {}
   return [width,height]
 }
