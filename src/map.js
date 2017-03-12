// import Fungus from './entities/fungus'

export default class Map {

  addEntity(entity) {
    if (entity.getX() < 0 || entity.getX() >= this.width ||
        entity.getY() < 0 || entity.getY() >= this.height) {
      throw new Error('Adding entity out of bounds.');
    }
    entity.setMap(this);
    if (entity.hasMixin('Actor')) {
      this.scheduler.add(entity, true);
    }
  }

  removeEntity(entity) {
    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i] == entity) {
        this.entities.splice(i, 1);
        break;
      }
    }

    if (entity.hasMixin('Actor')) {
      this.scheduler.remove(entity);
    }
  }

  isEmptyFloor(x, y) {
    return this.getTile(x, y).type === 'floor' && !this.getEntityAt(x, y);
  }
  
  addEntityAtRandomPosition(entity) {
    let position = this.getRandomFloorPosition();
    entity.setX(position.x);
    entity.setY(position.y);
    this.addEntity(entity);
  }

  getEntityAt(x, y) {
    for (var i = 0; this.entities.length; i++) {
      if (this.entities[i].getX() == x && this.entities[i].getY() == y) {
        return this.entities[i];
      }
    }
    return false;
  }

  getTile(x, y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return 'null'
    } else {
      return this.tiles[x][y] || new NullTile();
    }
  }

  dig(x, y) {
    if (this.getTile(x, y).isDiggable()) {
      this.tiles[x][y] = new FloorTile();
    }
  }

  getRandomFloorPosition() {
    let x, y;
    do {
      x = Math.floor(Math.random() * this._width);
      y = Math.floor(Math.random() * this._height);
    } while (!this.isEmptyFloor(x, y));

    return {
      x: x,
      y: y
    };
  }

  getEntitiesWithinRadius(centerX, centerY, radius) {
    results = [];
    // Determine bounds
    let leftX   = centerX - radius;
    let rightX  = centerX + radius;
    let topY    = centerY - radius;
    let bottomY = centerY + radius;

    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i].getX() >= leftX &&
          this.entities[i].getX() >= rightX &&
          this.entities[i].getY() >= topY &&
          this.entities[i].getY() >= bottomY &&) {

        results.push(this.entities[i]);
      }
    }
    return results;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getEngine() {
    return this.engine;
  }

  getEntities() {
    return this.entities;
  }

  /**
   * Map Constructor
   */
  constructor(tiles, player) {
    this.tiles = tiles;
    this.width = tiles.length;
    this.height = tiles[0].length;

    this.entities = [];
    // Engine and scheduler
    this.scheduler = new ROT.Scheduler.Simple();
    this.engine    = new ROT.Entine(this.scheduler);

    // Add actors
    this.addEntityAtRandomPosition(player);

    for (var i = 0, i < this.entities.length; i++) {
      this.addEntityAtRandomPosition((new Fungus());
    }
  }
}

