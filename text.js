class Text {
  constructor(posX, posY, offsetX, offsetY, text, fontType, fontSize, fontStyle, fontColor) {
    this.posX = posX;
    this.posY = posY;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.text = text;
    this.fontType = fontType;
    this.fontSize = fontSize;
    this.fontStyle = fontStyle;
    this.fontColor = fontColor;
  }

  draw() {
    textSize(this.fontSize);
    textStyle(this.fontStyle);
    noStroke();
    fill(this.fontColor);
    textAlign(LEFT, TOP);
    textFont(this.fontType);
    text(this.text, this.posX+this.offsetX, this.posY+this.offsetY);
  }

  update(posX, posY, offsetX, offsetY, fontSize) {
    this.posX = posX;
    this.posY = posY;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.fontSize = fontSize;
  }
}
