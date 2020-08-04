let ddTextureSize;
let ddTiles;
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
    ddTextureSize = new Dropdown(this.posX, this.posY+rem*scaleFactor, 4*rem*scaleFactor, rem*scaleFactor, "white", "Courier New", rem*scaleFactor, NORMAL, "black", colFontNA, this.width-5*rem*scaleFactor, 0);
    ddTextureSize.setElements([256, 512, 1024, 2048, 4096]);
    ddTextureSize.setup();
    ddTiles = new Dropdown(this.posX, this.posY+3*rem*scaleFactor, 4*rem*scaleFactor, rem*scaleFactor, "white", "Courier New", rem*scaleFactor, NORMAL, "black", colFontNA, this.width-5*rem*scaleFactor, 0);
    ddTiles.setElements([2, 4, 8, 16, 32, 64, 128]);
    ddTiles.setup();
    tTextureSize = new Text(this.posX, this.posY, 0, rem*scaleFactor, "Texture Size:", "Courier New", rem*scaleFactor, BOLD, colFont);
    tTiles = new Text(this.posX, this.posY, 0, 3*rem*scaleFactor, "Tiles:", "Courier New", rem*scaleFactor, BOLD, colFont);
    tTileSize = new Text(this.posX, this.posY, 0, 5*rem*scaleFactor, "", "Courier New", rem*scaleFactor, BOLD, colFont);
    zDependents.push(ddTextureSize);
    zDependents.push(ddTiles);
  }

  draw() {
    let tilesize = ddTextureSize.getActiveElement()/ddTiles.getActiveElement();
    if (scaleFactor == 1){
      tTileSize.setText(`Tile Size:     ${tilesize}px`);
    }
    else {
      tTileSize.setText(`Tile Size:          ${tilesize}px`);
    }
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
    ddTextureSize.update(this.posX, this.posY+rem*scaleFactor, this.width-5*rem*scaleFactor, 0, 4*rem*scaleFactor, rem*scaleFactor, rem*scaleFactor);
    ddTiles.update(this.posX, this.posY+3*rem*scaleFactor, this.width-5*rem*scaleFactor, 0, 4*rem*scaleFactor, rem*scaleFactor, rem*scaleFactor);
    tTextureSize.update(this.posX, this.posY, 0, rem*scaleFactor, rem*scaleFactor);
    tTiles.update(this.posX, this.posY, 0, 3*rem*scaleFactor, rem*scaleFactor);
    tTileSize.update(this.posX, this.posY, 0, 5*rem*scaleFactor, rem*scaleFactor);
  }

  onHover(x,y) {
    ddTextureSize.onHover(x,y);
    ddTiles.onHover(x,y);
  }

  onClicked(x,y) {
    if (ddTextureSize.getActiveState() == true){
      ddTextureSize.onClicked(x,y);
    }
    else if (ddTiles.getActiveState() == true){
      ddTiles.onClicked(x,y);
    }
    else {
      ddTextureSize.onClicked(x,y);
      ddTiles.onClicked(x,y);
    }
  }
}
