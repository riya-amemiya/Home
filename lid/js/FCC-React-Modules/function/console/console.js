class consoles {
  constructor() {
    this.red = "color: red;";
  }

  log(text, color) {
    console.log(`%c${text}`, `color: ${color};`);
  }

  error(text) {
    console.error(text);
  }

}

const Console = new consoles();
export default Console;