import View from "./mainColorView.js";

class RgbColors extends View {
  constructor(r, g, b) {
    super();
    //  this._r = r;
    //  this._g = g;
    //  this._b = b;
    this._addHandlerShowColors();
  }

  backgroundColor(randomColor) {
    this._parentEl.style.background = randomColor;
  }
  _rgb() {
    this._r.value = Math.floor(Math.random() * 256);
    this._g.value = Math.floor(Math.random() * 256);
    this._b.value = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${this._r.value},${this._g.value},${this._b.value})`;

    // set the background color to the random generated RGB
    this.backgroundColor(randomColor);
    this.generateMarkup(randomColor);
  }
  _colorToHex(color) {
    const hexDecimal = color.toString(16);
    return hexDecimal.length === 1 ? "0" + hexDecimal : hexDecimal;
  }
  _convertRgbToHex() {
    const r = +document.querySelector("#r").value;
    const g = +document.querySelector("#g").value;
    const b = +document.querySelector("#b").value;

    const generateHex =
      "#" + this._colorToHex(r) + this._colorToHex(g) + this._colorToHex(b);

    this.backgroundColor(generateHex);
    this.generateMarkup(generateHex);
  }

  _rgba(a) {
    this._r.value = Math.floor(Math.random() * 256);
    this._g.value = Math.floor(Math.random() * 256);
    this._b.value = Math.floor(Math.random() * 256);

    const randomColor = `rgba(${this._r.value},${this._g.value},${
      this._b.value
    },${+Math.random(a).toFixed(2)})`;

    // set the background color to the random generated RGB
    this.backgroundColor(randomColor);
    this.generateMarkup(randomColor);
  }

  generateColorHandler(handler) {
    this._btns.addEventListener("click", (e) => {
      // for random color
      const randomColor = e.target.closest(".btn-randomColor");
      if (randomColor) {
        this._rgb();
        this._setLabelTextContent();
      }
      // for rgba
      const rgbaColor = e.target.closest(".btn-rgba");
      if (rgbaColor) {
        this._rgba();
        this._setLabelTextContent();

        const lasts = Array.from(this._hexLabel.textContent)
          .join("")
          .replaceAll(")", "")
          .slice(-3);
      }
      // for hexColor
      const hexConverter = e.target.closest(".btn-hexConvert");
      if (hexConverter) {
        this._convertRgbToHex();
        this._setLabelTextContent();
      }

      handler();
    });
  }
  _setLabelTextContent() {
    this._rLabel.textContent = this._r.value;
    this._gLabel.textContent = this._g.value;
    this._bLabel.textContent = this._b.value;
  }
  generateMarkup(color) {
    const markup = `<h1 id="hex-label">
    ${color}
    </h1><span><i class="fa-regular fa-copy"></i></span> `;
    this._hexLabel.innerHTML = markup;
  }

  copyToClipboardHandler(handler) {
    this._hexLabel.addEventListener("click", function (e) {
      const copy = e.target.closest(".fa-copy");

      if (!copy) return;
      handler(document.querySelector("#hex-label").textContent);
      setTimeout(() => {
        document.querySelector("#hex-label").innerHTML = `<p>Copied!</p>`;
      }, 300);
    });
  }
  _btnTextClose() {
    if (this._colorsContainer.classList.contains("hidden"))
      this._displayColorsBtn.textContent = "Colors";
    else this._displayColorsBtn.textContent = "Close";
  }

  toggleColors() {
    this._colorsContainer.classList.toggle("hidden");
    this._btnTextClose();
  }
  _addHandlerShowColors() {
    this._displayColorsBtn.addEventListener(
      "click",
      this.toggleColors.bind(this)
    );
  }
}
export default new RgbColors();
