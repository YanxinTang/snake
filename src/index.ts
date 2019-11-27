import Controller from './controller';
import Game from './game';

const controller = new Controller();
const game = new Game({ speed: 100 });
game.addController(controller);