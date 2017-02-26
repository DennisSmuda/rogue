
import Game from './game.js';
import StartScreen from './screens/start';

/**
 * Initialize Game on window load event
 * - Enters StartScreen
 */
window.onload = () => {
  if (!ROT.isSupported()) {
    alert("ROT.js not supported!");
  } else {
    let game = new Game();
    game.init();
    document.body.appendChild(game.getDisplay().getContainer());
    game.switchScreen(new StartScreen(game))
  }
}
