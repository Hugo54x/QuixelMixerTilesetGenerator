let drop1;
let drop2;
let tTextureSize;
let tTiles;
let tTileSize;
let zDependents = [];
let renderOrder = [];

class ContentNew {
  constructor(posX, posY, width, height){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  setup() {
    drop1 = new Dropdown(this.posX, this.posY+rem*scaleFactor, 4*rem*scaleFactor, rem*scaleFactor, "white", "Courier New", rem*scaleFactor, NORMAL, "black", colFontNA, this.width-5*rem*scaleFactor, 0);
    drop1.setElements([256, 512, 1024, 2048, 4096]);
    drop1.setup();
    drop2 = new Dropdown(this.posX, this.posY+3*rem*scaleFactor, 4*rem*scaleFactor, rem*scaleFactor, "white", "Courier New", rem*scaleFactor, NORMAL, "black", colFontNA, this.width-5*rem*scaleFactor, 0);
    drop2.setElements([2, 4, 8, 16, 32, 64, 128]);
    drop2.setup();
    tTextureSize = new Text(this.posX, this.posY, 0, rem*scaleFactor, "Texture Size:", "Courier New", rem*scaleFactor, BOLD, colFont);
    tTiles = new Text(this.posX, this.posY, 0, 3*rem*scaleFactor, "Tiles:", "Courier New", rem*scaleFactor, BOLD, colFont);
    tTileSize = new Text(this.posX, this.posY, 0, 5*rem*scaleFactor, "", "Courier New", rem*scaleFactor, BOLD, colFont);
    zDependents.push(drop1);
    zDependents.push(drop2);
  }

  draw() {
    let tilesize = drop1.getActiveElement()/drop2.getActiveElement();
    tTileSize.setText(`Tile Size: ${tilesize}px`);
    tTextureSize.draw();
    tTiles.draw();
    tTileSize.draw();
    for (let el of zDependents) {
        if (el.getZIndex() < 1){
          renderOrder.unshift(el);
        }
        else {
          renderOrder.push(el);
        }
    }
    for (let el of renderOrder) {
      el.draw();
    }
  }

  update(posX, posY, width, height) {
    this.posY = posY;
    this.posX = posX;
    this.width = width;
    this.height = height;
    drop1.update(this.posX, this.posY+rem*scaleFactor, this.width-5*rem*scaleFactor, 0, 4*rem*scaleFactor, rem*scaleFactor, rem*scaleFactor);
    drop2.update(this.posX, this.posY+3*rem*scaleFactor, this.width-5*rem*scaleFactor, 0, 4*rem*scaleFactor, rem*scaleFactor, rem*scaleFactor);
    tTextureSize.update(this.posX, this.posY, 0, rem*scaleFactor, rem*scaleFactor);
    tTiles.update(this.posX, this.posY, 0, 3*rem*scaleFactor, rem*scaleFactor);
    tTileSize.update(this.posX, this.posY, 0, 5*rem*scaleFactor, rem*scaleFactor);
  }

  onHover(x,y) {
    drop1.onHover(x,y);
    drop2.onHover(x,y);
  }

  onClicked(x,y) {
    if (drop1.getActiveState() == true){
      drop1.onClicked(x,y);
    }
    else if (drop2.getActiveState() == true){
      drop2.onClicked(x,y);
    }
    else {
      drop1.onClicked(x,y);
      drop2.onClicked(x,y);
    }
  }
}
