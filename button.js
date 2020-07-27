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
    rect(this.posX, this.posY, this.width, this.height);
  }

  drawText() {
    textSize(this.fontSize);
    textStyle(this.textStyle);
    noStroke();
    fill(this.fontColor);
    textAlign(CENTER, CENTER);
    textFont(this.fontType);
    text(this.text, this.posX+this.width/2, this.posY+this.height/2);
  }

  update(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = 4*rem*scaleFactor;
    this.height = rem*scaleFactor;
    this.fontSize = rem*0.8*scaleFactor;
  }

  onHover(x,y) {
    if (x >= this.posX+this.offsetX && x <= this.posX+this.offsetX+this.width*scaleFactor && y >= this.posY+this.offsetY && y <= this.posY+this.offsetY+this.height*scaleFactor){
      this.textStyle = BOLD;
      this.strokeWeight = 2;
    }
    else {
      this.textStyle = NORMAL;
      this.strokeWeight = 1;
    }
  }

  onClicked(x,y) {
    if (x >= this.posX+this.offsetX && x <= this.posX+this.offsetX+this.width*scaleFactor && y >= this.posY+this.offsetY && y <= this.posY+this.offsetY+this.height*scaleFactor){
      this.processClick(this.callback);
    }
  }
  
  processClick(callback){
    callback()
  }
}
