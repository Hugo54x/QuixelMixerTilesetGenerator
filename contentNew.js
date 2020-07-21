let drop1;

class ContentNew {
  constructor(posX, posY, width, height){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  setup() {
    drop1 = new Dropdown(this.posX, this.posY+rem*scaleFactor, 4*rem, rem, "white", "Courier New", rem, NORMAL, "black", colFontNA, this.width*0.65, 0);
    drop1.setElements([256, 512, 1024, 2048, 4096]);
    drop1.setup();
  }

  draw() {
    drop1.draw();
  }

  update(posX, posY, width, height) {
    this.posY = posY;
    this.posX = posX;
    this.width = width;
    this.height = height;
    drop1.update(this.posX, this.posY+rem, this.width);
  }

  onHover(x,y) {
    drop1.onHover(x,y);
  }

  onClicked(x,y) {
    console.log(`Content 'New' was clicked at x: ${x}, y: ${y}`);
    if (drop1.getActiveState() == true){
      drop1.onClicked(x,y);
      console.log(drop1.getActiveState());
    }
    else {
      drop1.onClicked(x,y);
      console.log(drop1.getActiveState());
    }
  }
}
