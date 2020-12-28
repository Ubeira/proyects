const fs = require("fs");
const os = require("os"); //Sistema operativo

class Document {
  constructor(dir) {
    this._content = "";
    this._isSaved = "";
    this._filename = "";
    this._dir = dir;
  }
  exists(name) {
    return fs.existsSync(`${this._dir}/${name}`);
  }

  append(text) {
    //Añadir texto a un archivo
    this._content += os.EOL + text; //Salto de linea
    this._isSaved = false;
  }

  saveas(name) {
    fs.writeFileSync(`${this._dir}/${name}`, this._content);

    this._isSaved = true;
    this._filename = name;
  }

  save() {
    fs.writeFileSync(`${this._dir}/${this._filename}`, this._content);

    this._isSaved = true;
    this._filename = this._filename;
  }

  getContent() {
    return this._content;
  }

  hasName() {
    if (this._filename !== "") {
      return true;
    } else {
      return false;
    }
  }
  getName() {
    return this._filename;
  }

  _isSaved(){
      return this._isSaved;
  }

  open(name){
      this._content=fs.readFileSync(`${this._dir}/${name}`,'utf-8');
      this._filename=name;
      this._isSaved=true;
      return this._content;
  }
  
}

module.exports = Document;
