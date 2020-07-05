let numTabs = 2;
let tabNew;
let tabUpdate;

class UIManager {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setup() {
    tabNew = new Tab("New",0,0, this.width/numTabs, this.height/10, "grey", "black", "black", "Courier New", rem, 3, "white");
    tabNew.setup();
    tabUpdate = new Tab("Update",0,0, this.width/numTabs, this.height/10, "grey", "black", "black", "Courier New", rem, 3, "white");
    tabUpdate.setup();
  }

  draw() {
    tabNew.draw();
    tabUpdate.translateTab(0,1);
    tabUpdate.draw();
  }

  update(width, height) {
    tabNew.width = width/numTabs;
    tabNew.height = height/10;
    tabUpdate.width = width/numTabs;
    tabUpdate.height = height/10;
  }

  onClicked() {

  }

  onHover() {

  }
}
