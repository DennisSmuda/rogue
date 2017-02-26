
export default class StartScreen {
  constructor(game) {
    this.game = game;
  }

  enter() { console.log("Entered Start Screen"); }
  exit() { console.log("Exited Start Screen"); }

  render(display) {
    display.drawText(1, 1, "%c{yellow} Javascript Roguelike");
    display.drawText(1, 2, "Press Enter to Start!");
  }

  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_RETURN) {
        this.game.switchScreen(new StartScreen(this.game));
      }
    }
  }
}
