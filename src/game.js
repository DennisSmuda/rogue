import { DB32 } from './util/colors.js';

export default class Game {

  constructor() {
    this.display = null;
    this.currentScreen = null;
    this.screenWidth = 50;
    this.screenHeight = 20;
  }

  init() {
    this.display = new ROT.Display({
      width: this.screenWidth,
      height: this.screenHeight
    });
    this.display.setOptions({
      bg: DB32.darkPurp,
      fontSize: 28
    });

    let game = this;
    let bindEventToScreen = (event) => {
      window.addEventListener(event, (e) => {
        game.currentScreen.handleInput(event, e);
      });
    };

    bindEventToScreen('keydown');
  }


  switchScreen(screen) {
    if (this.currentScreen !== null) {
      this.currentScreen.exit();
    }
    // Clear display
    this.getDisplay().clear();
    // Update current Screen
    this.currentScreen = screen;
    if (!this.currentScreen !== null) {
      this.currentScreen.enter();
      this.refresh();
    }
  }


  refresh() {
    this.display.clear();
    this.currentScreen.render(this.display);
  }
  /* Getters */
  getDisplay() {
    return this.display;
  }
  getScreenWidth() {
    return this.screenWidth;
  }
  getScreenHeight() {
    return this.screenHeight;
  }
}

