class Tileset {
  constructor(posX, posY, len, margin, tiles){
    this.posX = posX;
    this.posY = posY;
    this.len = len;
    this.margin = margin;
    this.tiles = tiles;
  }

  setup() {

  }

  draw() {
    let sizeOneTile = this.len/this.tiles;
    //console.log(sizeOneTile);
    //this.drawTileset();
    for (let i = 0; i < this.tiles; i++){
      for (let j= 0; i < this.tiles; j++){
        //this.drawTile(i*sizeOneTile, j*sizeOneTile, (i+1)*sizeOneTile, (j+1)*sizeOneTile);
        //console.log(i*sizeOneTile);
      }
    }
  }

  update(posX, posY, len) {
    this.posY = posY;
    this.posX = posX;
    this.len = len;
  }

  drawTileset() {
    fill("yellow");
    noStroke();
    rect(this.posX+this.margin, this.posY+this.margin, this.len-this.margin, this.len-this.margin);
  }

  drawTile(x,y,w,h) {
    //console.log(x,y,w,h);
    stroke("red");
    strokeWeight(1);
    //noStroke();
    //fill(100,100,100,255);
    rect(x,y,w,h);
  }
}
