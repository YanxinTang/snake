import Node from './node';
import Game from './game';

export default class Food extends Node {
  private game: Game

  constructor(game: Game) {
    super();
    this.game = game;
    this.new();
  }

  new() {
    const {x, y} = this.newPosition();
    this.x = x;
    this.y = y;
  }

  newPosition() {
    const blanks = this.game.size * this.game.size - this.game.snake.body.length;
    let index = Math.floor(Math.random() * blanks);
    const gridArr: number[][] = Array.from(new Array(this.game.size), () => Array.from(new Array(this.game.size), () => 0));
    this.game.snake.body.forEach(node => {
      gridArr[node.y][node.x] = 1;
    });

    let i, j;
    for (i = 0; i < this.game.size; i++) {
      for (j = 0; j < this.game.size; j++) {
        if (gridArr[i][j] === 0) {
          index--;
          if (index === 0) {
            return { x: j, y: i}
          }
        }
      }
    }
  }
}