import Game from "./game";

export default class Grid {
  private game: Game;
  private canvas: any;
  private ctx: any;

  constructor(game: Game) {
    this.game = game;
    this.canvas = document.body.querySelector(this.game.container);
    this.canvas.height = this.game.size * this.game.nodeSize;
    this.canvas.width = this.game.size * this.game.nodeSize;
    this.ctx = this.canvas.getContext('2d');
    this.clear();
  }

  render() {
    this.clear();
    this.renderSnake();
    this.renderFood();
  }

  clear() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, this.game.size * this.game.nodeSize, this.game.size * this.game.nodeSize);
    ctx.restore();
  }

  renderSnake() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = '#000000';
    for (const node of this.game.snake.body) {
      ctx.fillRect(node.x * this.game.nodeSize, node.y * this.game.nodeSize, this.game.nodeSize, this.game.nodeSize);
    }
    ctx.restore();
  }

  renderFood() {
    const food = this.game.food;
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = '#000000';
    ctx.fillRect(food.x * this.game.nodeSize, food.y * this.game.nodeSize, this.game.nodeSize, this.game.nodeSize);
    ctx.restore();
  }
}