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
    this.zIndex = 0;
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
    translate(5,this.height*0.5);
    this.drawText(this.getElement(this.activeID));
    if (this.activeState == true){
      this.drawTexts();
    }
    pop();
    push();
    translate(this.posX+this.width-this.height, this.posY+this.height*0.25);
    this.drawTraingle();
    pop();
    pop();
  }

  update(posX, posY, offsetX, offsetY, width, height, font) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.fontSize = font;
  }

  onHover(x,y) {
    if (x >= this.posX+this.offsetX && x <= this.posX+this.offsetX+this.width && y >= this.posY+this.offsetY && y <= this.posY+this.offsetY+this.height){
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

      id = this.activeID;

      for (let i = 0; i <= this.elements.length; i++) {
        if (x >= this.posX+this.offsetX && x <= this.posX+this.width+this.offsetX && y >= this.posY+this.offsetY+this.height*i && y <= this.posY+this.height+this.offsetY+this.height*i){
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

    if (x >= this.posX+this.offsetX && x <= this.posX+this.width+this.offsetX && y >= this.posY+this.offsetY && y <= this.posY+this.height+this.offsetY){
      this.toggleState();
    }
  }

  toggleState() {
    if (this.activeState == false){
      this.activeState = true;
      this.zIndex = 1;
    }
    else {
      this.activeState = false;
      this.zIndex = 0;
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
    rect(this.posX, this.posY, this.width, this.height);
  }

  drawDrops() {
    for (let i = 1; i <= this.elements.length; i++) {
      push();
      translate(0, this.height*i);
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
    text(t, this.posX, this.posY);
  }

  drawTexts() {
    for (let i = 1; i <= this.elements.length; i++) {
      push();
      translate(0, this.height*i);
      this.drawText(this.elements[i-1]);
      pop();
    }
  }

  drawTraingle() {
    fill(this.triFill);
    strokeWeight(1);
    triangle(0, 0, this.height*0.7, 0, this.height*0.7*0.5, this.height*0.5);
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

  getZIndex() {
    return this.zIndex;
  }

  getActiveElement() {
    return this.elements[this.activeID]
  }
}
