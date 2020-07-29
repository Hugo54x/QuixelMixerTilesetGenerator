class InputField {
  constructor(posX, posY, width, height, lineCol, bgColor, offsetX, offsetY, fontColor, fontSize, fontType, textStyle) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.lineCol = lineCol;
    this.bgColor = bgColor;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.strokeWeight = 1;
    this.typeModeActivated = false;
    this.text = "";
    this.fontColor = fontColor;
    this.fontSize = fontSize;
    this.fontType = fontType;
    this.code = null;
    this.keyStrokeFinished = true;
    this.textStyle = textStyle;
  }

  setup() {

  }

  draw() {
    this.drawInputField();
    this.drawText();
    filename = this.text;
  }

  drawInputField() {
    fill(this.bgColor);
    strokeWeight(this.strokeWeight);
    stroke(this.lineCol);
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

  update(posX, posY, offsetY) {
    this.posX = posX;
    this.posY = posY;
    this.offsetY = offsetY;
    this.fontSize = rem*0.8;
  }

  onHover(x,y) {
    if (x >= this.posX+this.offsetX*scaleFactor && x <= this.posX+this.offsetX*scaleFactor+this.width*scaleFactor && y >= this.posY+this.offsetY*scaleFactor && y <= this.posY+this.offsetY*scaleFactor+this.height*scaleFactor){
      this.strokeWeight = 2;
      this.textStyle = BOLD;
    }
    else {
      this.strokeWeight = 1;
      this.textStyle = NORMAL;
    }
  }

  onClicked(x,y) {
    if (x >= this.posX+this.offsetX*scaleFactor && x <= this.posX+this.offsetX*scaleFactor+this.width*scaleFactor && y >= this.posY+this.offsetY*scaleFactor && y <= this.posY+this.offsetY*scaleFactor+this.height*scaleFactor){
      this.typeModeActivated = true;
      this.keyStrokeFinished = false;
      this.keyPressed();
    }
  }

  keyPressed() {
    if (keyIsPressed === true) {
      this.code = key;
    }
    else {
      this.code = null;
    }
    if(this.typeModeActivated){

      if (this.code == "Enter"){
        this.typeModeActivated = false;

        return false;
      }
      else {
        if (this.code != null && this.typeModeActivated == true){
          if (this.code == "Backspace") {
            this.text = this.text.slice(0, -1);
          }
          else if (this.code == "Shift") {

          }
          else {
              this.text += key;
          }
        }
      }
    }
    return false;
  }
}
