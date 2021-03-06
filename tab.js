class Tab {
  constructor(text, posX, posY, width, height, tabColor, bgColor, fontColor, fontType, fontSize, textStyle, lineSize, lineCol) {
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
    this.textStyle = textStyle;
    this.paddingTop = height/10;
    this.lineSize = lineSize/2;
    this.lineCol = lineCol;
    this.hoverState = false;
    this.activeState = false;
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
    rect(this.lineSize*2+1, this.height-1,this.width-this.lineSize*4-2 ,-(this.lineSize));
  }

  translateTab() {
    translate((this.width/numTabs)*2*this.posX, this.height*this.posY);
  }

  drawText() {
    textSize(this.height/2+this.fontSize/2);
    textStyle(this.textStyle);
    fill(this.fontColor);
    textAlign(LEFT,CENTER);
    textFont(this.fontType);
    text(this.text, this.height/4, this.height/1.75);
  }

  draw() {
    this.checkState();
    this.checkHover();
    this.drawBackground();
    this.drawTabInner();
    this.drawTabOutline();
    this.overdrawEdge();
    this.drawText();
  }

  update(width, height) {
    this.width = width/numTabs;
    this.height = height/10;
  }

  onClicked() {
    this.toggleState();
  }

  onHover(x,y) {
    if (this.width*this.posX <= x && x <= (this.width*this.posX)+this.width && 0 <= y && y <= this.height) {
      this.setHoverState(true);
      this.fontSize = rem+5;
    }
    else {
      this.setHoverState(false);
      this.fontSize = rem;
    }
  }

  setHoverState(state) {
    this.hoverState = state;
  }

  getHoverState() {
    return this.hoverState;
  }

  checkHover() {
    if(this.hoverState == true && this.activeState == true){
      this.tabColor = colTri;
    }
    else if (this.hoverState == true && this.activeState == false) {
      this.tabColor = colSecondary;
    }
    else if (this.hoverState == false && this.activeState == true) {
      this.tabColor = colSecondary;
    }
    else if (this.hoverState == false && this.activeState == false) {
      this.tabColor = colPrimary;
    }
  }

  toggleState() {
    if (this.activeState == true) {
      this.setActiveState(false);
      this.tabColor = colSecondary;
      this.fontColor = colFontNA;
      this.lineCol = colFontNA;
    }
    else {
      this.setActiveState(true);
      this.tabColor = colPrimary;
      this.fontColor = colFont;
      this.lineCol = colFont;
    }
  }

  setActiveState(state) {
    this.activeState = state;
  }

  getActiveState() {
    return this.activeState;
  }

  checkState() {
    if (this.activeState == true) {
      this.tabColor = colSecondary;
    }
    else {
      this.tabColor = colPrimary;
    }
  }
}
