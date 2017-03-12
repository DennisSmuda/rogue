import StartScreen from './start';
import Entity from '../entities/entity';
import { PlayerTemplate } from '../entities/entities';

import {  NullTile,
          WallTile,
          FloorTile
        } from '../tile';

/**
 * Play Screen
 *
 */
export default class PlayScreen {
  constructor(game) {
    this.game = game;
    this.player = null;
  }

  enter() {
    let map = [];
    let mapWidth = 100;
    let mapHeight = 48;

    for (let x = 0; x < mapWidth; x++) {
      map.push([]);
      for (let y = 0; y < mapHeight; y++) {
        map[x].push(new NullTile())
      }
    }

    let generator = new ROT.Map.Cellular(mapWidth, mapHeight);
    generator.randomize(0.5);
    let totalIterations = 3;

    for (let i = 0; i < totalIterations - 1; i++) {
      generator.create();
    }
    generator.create((x, y, v) => {
      if (v === 1) {
        map[x][y] = new FloorTile();
      } else {
        map[x][y] = new WallTile();
      }
    });

    this.player = new Entity('player');

  }
  exit() { console.log("Exited Game Screen"); }

  render(display) {
    let screenWidth  = this.game.getScreenWidth();
    let screenHeight = this.game.getScreenHeight();
  }

  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_RETURN) {
        this.game.switchScreen(new StartScreen(this.game));
      }
    }
  }
}
