let contentNew;
let contentUpdate;
let tileset;

class Content {
  constructor(posX, posY, width, height, col) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.col = col;
  }

  setup() {
    contentNew = new ContentNew(this.posX+this.width/2, this.posY, this.width/2, this.height);
    contentNew.setup();
    contentUpdate = new ContentUpdate(this.posX+this.width/2, this.posY, this.width/2, this.height);
    contentUpdate.setup();
    tileset = new Tileset(this.posX, this.posY, this.height);
    tileset.setup();
  }

  draw() {
    this.drawBackground();
    if(tabNew.getActiveState() == true){
      contentNew.draw();
      tileset.draw();
    }
    if(tabUpdate.getActiveState() == true){
      contentUpdate.draw();
      tileset.draw();
    }
  }

  update(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    tileset.update(this.posX, this.posY, this.height);
    contentNew.update(this.posX+this.width/2, this.posY, this.width/2, this.height);
    contentUpdate.update(this.posX+this.width/2, this.posY, this.width/2, this.height);
  }

  onHover(x,y) {
    if (this.posX <= x && x <= this.width && this.posY <= y && y <= this.height) {
      if (tabNew.getActiveState() == true){
        contentNew.onHover(x,y);
      }
      if (tabUpdate.getActiveState() == true){
        contentUpdate.onHover(x,y);
      }
    }
  }

  onClicked(x,y) {
    if (tabNew.getActiveState() == true){
      contentNew.onClicked(x,y);
    }
    if (tabUpdate.getActiveState() == true){
      contentUpdate.onClicked(x,y);
    }
  }

  drawBackground() {
    fill(this.col);
    noStroke();
    rect(this.posX, this.posY, this.width, this.height);
  }
}
