class Dropdown {
  constructor(posX, posY, width, height, bgColor, fontType, fontSize, textStyle, fontColor, triFill, offsetX, offsetY) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.bgColor = bgColor;
    this.fontType = fontType;
    this.fontSize = fontSize;
    this.textStyle = textStyle;
    this.fontColor = fontColor;
    this.elements = [];
    this.activeID = 0;
    this.triFill = triFill;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.hoverState = false;
    this.activeState = false;
  }

  setup() {

  }

  draw() {
    push();
    translate(this.offsetX, this.offsetY);
    this.drawDrop();
    if (this.activeState == true){
      this.drawDrops();
    }
    push();
    translate(5,0);
    this.drawText(this.getElement(this.activeID));
    if (this.activeState == true){
      this.drawTexts();
    }
    pop();
    push();
    translate(this.posX+50*scaleFactor,this.posY+5*scaleFactor);
    this.drawTraingle();
    pop();
    pop();
  }

  update(posX, posY, width) {
    this.posX = posX;
    this.posY = posY;
    this.offsetX = width*0.65;
    this.fontSize = rem*scaleFactor;
  }

  onHover(x,y) {
    if (x >= this.posX+this.offsetX && x <= this.posX+this.offsetX+this.width*scaleFactor && y >= this.posY+this.offsetY && y <= this.posY+this.offsetY+this.height*scaleFactor){
      this.hoverState = true;
      this.triFill = colFont;
    }
    else {
      this.hoverState = false;
      this.triFill = colFontNA;
    }
  }

  setHoverState(state) {
    this.hoverState = state;
  }

  getHoverState() {
    return this.hoverState;
  }

  onClicked(x,y) {
    if (this.getActiveState() == true){
      let id;

      for (let i = 0; i <= this.elements.length; i++) {
        if (x >= this.posX+this.offsetX && x <= this.posX+this.width*scaleFactor+this.offsetX && y >= this.posY+this.offsetY+this.height*i*scaleFactor && y <= this.posY+this.height*scaleFactor+this.offsetY+this.height*i*scaleFactor){
          id = i-1;
        }
      }

      if (id == -1){
        id = this.activeID;
        this.toggleState();
      }
      else{
        this.activeID = id;
      }

      this.toggleState();
    }

    if (x >= this.posX+this.offsetX && x <= this.posX+this.width*scaleFactor+this.offsetX && y >= this.posY+this.offsetY && y <= this.posY+this.height*scaleFactor+this.offsetY){
      this.toggleState();
    }
  }

  toggleState() {
    if (this.activeState == false){
      this.activeState = true;
    }
    else {
      this.activeState = false;
    }
  }

  drawDrop(stro = false) {
    fill(this.bgColor);
    if (stro == true){
      stroke(colFontNA);
    }
    else {
      stroke(colFont)
    }
    strokeWeight(1);
    rect(this.posX, this.posY, this.width*scaleFactor, this.height*scaleFactor);
  }

  drawDrops() {
    for (let i = 1; i <= this.elements.length; i++) {
      push();
      translate(0, this.height*scaleFactor*i);
      this.drawDrop(true);
      pop();
    }
  }

  drawText(t) {
    noStroke();
    textStyle(this.textStyle);
    textFont(this.fontType);
    textSize(this.fontSize);
    fill(this.fontColor);
    textAlign(LEFT,CENTER);
    text(t, this.posX, this.posY+rem*scaleFactor/2+1);
  }

  drawTexts() {
    for (let i = 1; i <= this.elements.length; i++) {
      push();
      translate(0, this.height*scaleFactor*i);
      this.drawText(this.elements[i-1]);
      pop();
    }
  }

  drawTraingle() {
    fill(this.triFill);
    strokeWeight(1*scaleFactor);
    triangle(0,0, 10*scaleFactor, 0, 5*scaleFactor,7*scaleFactor);
  }

  setElements(element) {
    this.elements = element;
  }

  getElements() {
    return this.elements;
  }

  getElement(id) {
    return this.elements[id];
  }

  getBoundaries() {
    return [this.posX, this.posY, this.width, this.height]
  }

  getActiveState() {
    return this.activeState;
  }
}
