import { DB32 } from './util/colors.js';

import Glyph from './glyph'

class Tile extends Glyph {
  constructor(properties) {
    super(properties);
    this.properties = properties || {};

    this.isWalkable = this.properties['isWalkable'] || false;
    this.isDiggable = this.properties['isDiggable'] || false;

  }

  isWalkable() {
    return this.isWalkable;
  }

  isDiggable() {
    return this.isDiggable;
  }
}

export class NullTile extends Tile {
  constructor() {
    super();
  }
}

export class FloorTile extends Tile {
  constructor(properties = {
    character: '.',
    foreground: DB32.darkBrown,
    background: DB32.background,
    isWalkable: true
  }) {
    super(properties);
    this.type = 'floor'
  }

}

export class WallTile extends Tile {
  constructor() {
    super();
  }

}

