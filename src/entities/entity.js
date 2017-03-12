import Glyph from '../glyph'

export default class Entity extends Glyph {
  constructor(properties) {
    super(properties);
    this.properties = properties || {};
  }

  hasMixin(mixinName) {
    for(let i = 0; i < this.mixins.length; i++) {
      if (this.mixins[i].name == mixinName) {
        return true;
      }
    }
    return false;
  }
  

}
