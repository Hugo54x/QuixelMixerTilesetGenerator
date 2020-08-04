let btnUpload;
let ddVersion;

class ContentUpdate {
  constructor(posX, posY, width, height){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  setup() {
    btnUpload = new Button(this.posX, this.posY, rem*4*scaleFactor, rem*scaleFactor, "white", "red", "Upload", NORMAL, "black", rem*0.8*scaleFactor, "Courier New", this.width*0.5-rem*4*0.5*scaleFactor, 10*scaleFactor, filemanager.upload);
    btnUpload.setup();
    ddVersion = new Dropdown(this.posX-2*rem, this.posY+4*rem*scaleFactor, 6*rem*scaleFactor, rem*scaleFactor, "white", "Courier New", rem*scaleFactor, NORMAL, "black", colFontNA, this.width*0.5-3*rem*scaleFactor, 0);
    ddVersion.setElements(['Version', '2020.1.3']);
    ddVersion.setup();
  }

  draw() {
    btnUpload.draw();
    ddVersion.draw();
  }

  update(posX, posY, width, height) {
    this.posY = posY;
    this.posX = posX;
    this.width = width;
    this.height = height;
    btnUpload.update(posX, posY, 4*rem*scaleFactor, rem*scaleFactor, this.width*0.5-rem*4*0.5*scaleFactor, 10*scaleFactor, rem*0.8*scaleFactor);
    ddVersion.update(this.posX, this.posY+4*rem*scaleFactor, this.width*0.5-3*rem*scaleFactor, 0, 6*rem*scaleFactor, rem*scaleFactor, rem*scaleFactor);
  }

  onHover(x,y) {
    btnUpload.onHover(x,y);
    ddVersion.onHover(x,y);
  }

  onClicked(x,y) {
    btnUpload.onClicked(x,y);
    ddVersion.onClicked(x,y);
  }
}
