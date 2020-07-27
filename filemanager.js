let file;
let input;
let fileContent;

class Filemanager {
  setup() {

  }

  upload() {
    input = document.createElement("input");
    input.type = "file";
    input.accept = ".xml";

    input.onchange = e => {
      file = e.target.files[0];

      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");

      reader.onload = readerEvent => {
        fileContent = readerEvent.target.result;
      }

      reader.onloadend = end => {
        console.log(fileContent);
      }
      //
      // console.log(file.name);
      // console.log(file.size);
      // console.log(file.type);
    }
    input.click();
  }
}
