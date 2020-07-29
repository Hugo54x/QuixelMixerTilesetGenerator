let numTabs = 2;
let tabNew;
let tabUpdate;
let content;
let footer;

let colFont = "#000000";
let colFontNA = "#FFFFFF";
let colLink = "#303030";
let colPrimary = "#454545";
let colSecondary = "#909090";
let colPriHover = "#292929";
let colSecHover = "#585858";
let colTri = "#cccccc";

class UIManager {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setup() {
    tabNew = new Tab("New",0,0, this.width/numTabs, this.height/10, colSecondary, colPrimary, colFont, "Courier New", rem, BOLD, 3, colFont);
    tabNew.setActiveState(true);
    tabNew.setup();
    tabUpdate = new Tab("Update",1,0, this.width/numTabs, this.height/10, colSecondary, colPrimary, colFontNA, "Courier New", rem, BOLD, 3, colFontNA);
    tabUpdate.setActiveState(false);
    tabUpdate.setup();
    content = new Content(0, this.height/10, this.width, this.height-2*(this.height/10), colSecondary);
    content.setup();
    footer = new Footer(0, this.height-(this.height/10), this.width, this.height, colSecondary);
    footer.setup();
  }

  draw() {
    tabNew.draw();
    push();
    tabUpdate.translateTab();
    tabUpdate.draw();
    pop();
    content.draw();
    footer.draw();
  }

  update(width, height) {
    this.width = width;
    this.height = height;
    tabNew.update(width, height);
    tabUpdate.update(width, height);
    content.update(0, height/10, width, height-2*(height/10));
    footer.update(0,height-(height/10), width, height);
  }

  onClicked(x,y) {
    if (x <= this.width && y <= this.height) {
      if(tabNew.getHoverState() == true && tabNew.getActiveState() == false){
        tabNew.onClicked();
        tabUpdate.onClicked();
      }
      if(tabUpdate.getHoverState() == true && tabUpdate.getActiveState() == false){
        tabNew.onClicked();
        tabUpdate.onClicked();
      }
      if (x >= 0 && y >= this.height/10 && y <= this.height-2*(this.height/10)){
        content.onClicked(x,y);
      }
      if (x >= 0 && y >= this.height-2*(this.height/10) && y <= this.height){
        footer.onClicked(x,y);
      }
    }
  }

  onHover(x,y) {
    tabNew.onHover(x,y);
    tabUpdate.onHover(x,y);
    content.onHover(x,y);
    footer.onHover(x,y);
  }

  keyPressed(){
    footer.keyPressed();
    return false;
  }
}
