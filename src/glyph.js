export default class Glyph {
  constructor(properties) {
    this.properties = properties ||  {};
    this.char = this.properties['character'] || ' ';
    this.foreground = this.properties['foreground'] || 'white';
    this.background = this.properties['background'] || 'black';
  }

  getChar() {
    return this.char;
  }
  getBackground() {
    return this.background;
  }
  getForeground() {
    return this.foreground;
  }
}

