let btnUpload;
let ddVersion;
let btnUpdate;

class ContentUpdate {
  constructor(posX, posY, width, height){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  setup() {
    btnUpload = new Button(this.posX, this.posY, rem*4*scaleFactor, rem*scaleFactor, "white", "red", "Upload", NORMAL, "black", rem*0.8*scaleFactor, "Courier New", this.width*0.5-rem*4*0.5*scaleFactor, rem*scaleFactor, filemanager.upload);
    btnUpload.setup();
    ddVersion = new Dropdown(this.posX, this.posY, 6*rem*scaleFactor, rem*scaleFactor, "white", "Courier New", rem*scaleFactor, NORMAL, "black", colFontNA, this.width*0.5-6*rem*0.5*scaleFactor, 4*rem*scaleFactor);
    ddVersion.setElements(['Version', '2020.1.3']);
    ddVersion.setup();
    btnUpdate = new Button(this.posX, this.posY, rem*4*scaleFactor, rem*scaleFactor, "white", "red", "Update", NORMAL, "black", rem*0.8*scaleFactor, "Courier New", this.width*0.5-rem*4*0.5*scaleFactor, 6*rem*scaleFactor, filemanager.update);
    btnUpdate.setup();
  }

  draw() {
    btnUpload.draw();
    btnUpdate.draw();
    ddVersion.draw();
  }

  update(posX, posY, width, height) {
    this.posY = posY;
    this.posX = posX;
    this.width = width;
    this.height = height;
    btnUpload.update(this.posX, this.posY, 4*rem*scaleFactor, rem*scaleFactor, this.width*0.5-rem*4*0.5*scaleFactor, rem*scaleFactor, rem*0.8*scaleFactor);
    ddVersion.update(this.posX, this.posY, this.width*0.5-6*rem*0.5*scaleFactor, 4*rem*scaleFactor, 6*rem*scaleFactor, rem*scaleFactor, rem*scaleFactor);
    btnUpdate.update(this.posX, this.posY, 4*rem*scaleFactor, rem*scaleFactor, this.width*0.5-rem*4*0.5*scaleFactor, 6*rem*scaleFactor, rem*0.8*scaleFactor);
  }

  onHover(x,y) {
    btnUpload.onHover(x,y);
    btnUpdate.onHover(x,y);
    ddVersion.onHover(x,y);
  }

  onClicked(x,y) {
    btnUpload.onClicked(x,y);
    btnUpdate.onClicked(x,y);
    ddVersion.onClicked(x,y);
  }
}
