// import icons from "URL:../../img/icons.svg";

export default class View {
  _btns = document.querySelector(".btns");
  _parentEl = document.querySelector("body");
  _hexLabel = document.querySelector("#hex-label");
  copy = document.querySelector(".fa-copy");

  _rLabel = document.querySelector("#r-label");
  _gLabel = document.querySelector("#g-label");
  _bLabel = document.querySelector("#b-label");
  _aLabel = document.querySelector("#a-label");

  _r = document.querySelector("#r");
  _g = document.querySelector("#g");
  _b = document.querySelector("#b");
  _a = document.querySelector("#a");

  _displayColorsBtn = document.querySelector(".displayContainer");
  _colorsContainer = document.querySelector(".colorContainer");

  _clear() {
    this._parentEl.innerHTML = "";
  }
}
