let nameIn;
let btnDown;
let tName;
let tFT;

class Footer {
  constructor(posX, posY, width, height, bgColor) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.bgColor = bgColor;
  }

  setup() {
    nameIn = new InputField(this.posX, this.posY, 12*rem, rem, colFont, colFontNA, 2*10+3*rem, (this.height/scaleFactor*0.1-rem)/2, colFont, rem*0.8, "Courier New", NORMAL);
    nameIn.setup();
    btnDown = new Button(this.posX, this.posY, rem*4*scaleFactor, rem*scaleFactor, "white", "red", "Download", NORMAL, "black", rem*0.8*scaleFactor, "Courier New", this.width-(10*scaleFactor+rem*4*scaleFactor), (this.height*0.1-rem*scaleFactor)/2, filemanager.download);
    btnDown.setup();
    tName = new Text(this.posX, this.posY, 10*scaleFactor, rem*scaleFactor/4*scaleFactor, "Name:", "Courier New", rem*scaleFactor, BOLD, colFont);
    tFT = new Text(this.posX, this.posY, 3*10*scaleFactor+14.5*rem*scaleFactor, rem*scaleFactor/4*scaleFactor, ".xml", "Courier New", rem*scaleFactor, BOLD, colFont);
  }

  draw() {
    this.drawBackground();
    nameIn.draw();
    btnDown.draw();
    tName.draw();
    tFT.draw();
  }

  drawBackground() {
    fill(this.bgColor);
    noStroke();
    rect(this.posX, this.posY, this.width, this.height);
  }

  update(posX, posY, width, height){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    nameIn.update(posX, posY, (this.height/scaleFactor*0.1-rem)/2);
    btnDown.update(posX, posY, rem*4*scaleFactor, rem*scaleFactor, this.width-(10*scaleFactor+rem*4*scaleFactor), (this.height/scaleFactor*0.1-rem)/2*scaleFactor, rem*0.8*scaleFactor);
    tName.update(this.posX, this.posY, 10*scaleFactor, rem*scaleFactor/4*scaleFactor, rem*scaleFactor);
    tFT.update(this.posX, this.posY, 3*10*scaleFactor+14.5*rem*scaleFactor, rem*scaleFactor/4*scaleFactor, rem*scaleFactor);
  }

  onHover(x,y) {
    nameIn.onHover(x,y);
    btnDown.onHover(x,y);
  }

  onClicked(x,y) {
    nameIn.onClicked(x,y);
    btnDown.onClicked(x,y);
  }

  keyPressed() {
    nameIn.keyPressed();
    return false;
  }
}
