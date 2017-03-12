import StartScreen from './start';
import Map from '../map';
import Entity from '../entities/entity';
import Player from '../entities/player';
import { PlayerTemplate } from '../entities/entities';

import { NullTile, WallTile, FloorTile } from '../tile';

/**
 * Play Screen
 *
 */
export default class PlayScreen {
  constructor(game) {
    this.game = game;
    this.player = null;
    this.map = null ;
    this.mapWidth = 100;
    this.mapHeight = 48;
  }

  enter() {
    console.log('Enter Playscreen');
    let map = [];
    for (let x = 0; x < this.mapWidth; x++) {
      map.push([]);
      for (let y = 0; y < this.mapHeight; y++) {
        map[x].push(new NullTile())
      }
    }

    let generator = new ROT.Map.Cellular(this.mapWidth, this.mapHeight);
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

    this.player = new Player();
    this.map = new Map(map, this.player);
    console.log(this.map);
    // this.map.getEngine().start();

  }

  /**
   * Quit Game
   */
  exit() {
    console.log("Exited Game Screen");
  }


  /**
   * Render Game
   */
  render(display) {
    console.log('Render Play Screen');
    let screenWidth  = this.game.getScreenWidth();
    let screenHeight = this.game.getScreenHeight();

    // Keep in bounds
    let topLeftX = Math.max(0, this.player.getX() - (screenWidth/2));
    topLeftX = Math.min(topLeftX, this.map.getWidth() - (screenWidth/2));
    let topLeftY = Math.max(0, this.player.getY() - (screenHeight/2));
    topLeftY = Math.min(topLeftY, this.map.getHeight() - (screenHeight/2));

    for (let x = topLeftX; x < topLeftX+this.screenWidth; x++) {
      for (let y = topLeftY; y < topLeftY+this.screenHeight; y++) {
        // Get Glyph to render
        let tile = this.map.getTile(x, y);
        console.log(tile);
      }
    }
  }

  /**
   * Handle Input
   */
  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_RETURN) {
        this.game.switchScreen(new StartScreen(this.game));
      }
    }
  }
}
