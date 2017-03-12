
export default class Map {
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
  }
}
