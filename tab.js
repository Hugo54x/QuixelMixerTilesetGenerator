class Tab {
  constructor(text, posX, posY, width, height, tabColor, bgColor, fontColor, fontType, fontSize, lineSize, lineCol) {
    this.text = text;
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.tabColor = tabColor;
    this.bgColor = bgColor;
    this.fontColor = fontColor;
    this.fontType = fontType;
    this.fontSize = fontSize;
    this.paddingTop = height/10;
    this.lineSize = lineSize/2;
    this.lineCol = lineCol;
  }

  setup() {
    this.draw()
  }

  drawBackground() {
    fill(this.bgColor);
    noStroke();
    rect(0, 0, this.width, this.height+1);
  }

  drawTabInner() {
    fill(this.tabColor);
    noStroke();
    this.getTabShape();
  }

  drawTabOutline() {
    noFill();
    stroke(this.lineCol);
    strokeWeight(this.lineSize);
    this.getTabShape();
  }

  getTabShape() {
    rect(this.lineSize, this.lineSize, this.width-this.lineSize*2, this.height, 10, 10, 0, 0);
  }

  overdrawEdge() {
    strokeWeight(this.lineSize+1);
    stroke(this.tabColor);
    fill(this.tabColor);
    //line(this.lineSize*2+1, this.height+this.lineSize, this.width, this.height+this.lineSize);
    rect(this.lineSize*2+1, this.height-1,this.width-this.lineSize*4-2 ,-(this.lineSize))
  }

  translateTab(transX, transY) {
    translate((this.width/numTabs)*2, this.height*transX);
  }

  drawText() {
    textSize(this.height/2+this.fontSize/2);
    stroke(this.fontColor);
    strokeWeight(1);
    fill(this.fontColor);
    textAlign(LEFT,CENTER);
    textFont(this.fontType);
    text(this.text, this.height/4, this.height/1.75);
  }

  draw() {
    this.drawBackground();
    this.drawTabInner();
    this.drawTabOutline();
    this.overdrawEdge();
    this.drawText();
  }

  onClicked() {

  }

  onHover() {

  }
}
