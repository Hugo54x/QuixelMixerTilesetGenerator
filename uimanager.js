let numTabs = 2;
let tabNew;
let tabUpdate;
let content;

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
    tabNew = new Tab("New",0,0, this.width/numTabs, this.height/10, colSecondary, colPrimary, colFont, "Courier New", rem, 1, 3, "white");
    tabNew.setActiveState(true);
    tabNew.setup();
    tabUpdate = new Tab("Update",1,0, this.width/numTabs, this.height/10, colSecondary, colPrimary, colFontNA, "Courier New", rem, 1, 3, "white");
    tabUpdate.setActiveState(false);
    tabUpdate.setup();
    content = new Content(0, this.height/10, this.width, this.height-2*(this.height/10), colSecondary);
    content.setup();
  }

  draw() {
    tabNew.draw();
    push();
    tabUpdate.translateTab();
    tabUpdate.draw();
    pop();
    content.draw();
  }

  update(width, height) {
    this.width = width;
    this.height = height;
    tabNew.update(width, height);
    tabUpdate.update(width, height);
    content.update(height/10, width, height-2*(height/10));
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
    }
  }

  onHover(x,y) {
    tabNew.onHover(x,y);
    tabUpdate.onHover(x,y);
  }
}
