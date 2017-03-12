import { DB32 } from '../util/colors.js';


export const PlayerTemplate = {
  character: '@',
  maxHp: 40,
  hp: 40,
  attackValue: 10,
  foreground: DB32.white,
  background: DB32.background,
  // mixins: [Game.Mixins.Moveable, Game.Mixins.PlayerActor,
  //          Game.Mixins.Attacker, Game.Mixins.Destructible,
  //          Game.Mixins.MessageRecipient]
}
