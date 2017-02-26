
class Tile {
  constructor(properties) {
    this.properties = properties || {};
  }
}

export class NullTile extends Tile {
  constructor() {
    super();
  }
}

export class FloorTile extends Tile {
  constructor() {
    super();
  }

}

export class WallTile extends Tile {
  constructor() {
    super();
  }

}
