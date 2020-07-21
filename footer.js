class Footer {
  constructor(posX, posY, width, height, bgColor) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.bgColor = bgColor;
  }

  setup() {

  }

  draw() {
    this.drawBackground();
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
  }

  onHover() {

  }

  onClicked() {

  }
}
