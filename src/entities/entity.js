import Glyph from '../glyph'

export default class Entity extends Glyph {
  constructor(properties) {
    super(properties);
    console.log(properties)
    this.properties = properties || {};
  }
}
