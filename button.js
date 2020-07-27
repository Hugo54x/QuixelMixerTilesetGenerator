class Button {
  constructor(posX, posY, width, height, btnCol, btnHovCol, text, textStyle, fontColor, fontSize, fontType, offsetX, offsetY, callback) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.btnCol = btnCol;
    this.btnHovCol = btnHovCol;
    this.text = text;
    this.textStyle =textStyle;
    this.fontColor = fontColor;
    this.fontSize = fontSize;
    this.fontType = fontType;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.strokeWeight = 1;
    this.callback = callback;
  }

  setup() {

  }

  draw() {
    this.drawBackground();
    this.drawText();
  }

  drawBackground() {
    fill(this.btnCol);
    stroke("black");
    strokeWeight(this.strokeWeight);
    rect(this.posX+this.offsetX*scaleFactor, this.posY+this.offsetY*scaleFactor, this.width*scaleFactor, this.height*scaleFactor);
  }

  drawText() {
    textSize(this.fontSize*scaleFactor);
    textStyle(this.textStyle);
    noStroke();
    fill(this.fontColor);
    textAlign(CENTER, CENTER);
    textFont(this.fontType);
    text(this.text, this.posX+(this.width/2)*scaleFactor+this.offsetX*scaleFactor, this.posY+(this.height/2)*scaleFactor+this.offsetY*scaleFactor);
  }

  update(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = 4*rem;
    this.height = rem;
    this.fontSize = rem*0.8;
  }

  onHover(x,y) {
    if (x >= this.posX+this.offsetX*scaleFactor && x <= this.posX+this.offsetX*scaleFactor+this.width*scaleFactor && y >= this.posY+this.offsetY*scaleFactor && y <= this.posY+this.offsetY*scaleFactor+this.height*scaleFactor){
      this.textStyle = BOLD;
      this.strokeWeight = 2;
    }
    else {
      this.textStyle = NORMAL;
      this.strokeWeight = 1;
    }
  }

  onClicked(x,y) {
    if (x >= this.posX+this.offsetX*scaleFactor && x <= this.posX+this.offsetX*scaleFactor+this.width*scaleFactor && y >= this.posY+this.offsetY*scaleFactor && y <= this.posY+this.offsetY*scaleFactor+this.height*scaleFactor){
      this.processClick(this.callback);
    }
  }

  processClick(callback){
    callback()
  }
}
