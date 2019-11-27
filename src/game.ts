import Snake from "./snake";
import Food from "./food";
import Grid from "./grid";
import Controller from "./controller";

interface Option {
  size?: number
  nodeSize?: number
  speed?: number
}

export default class Game {
  public size: number;                           // Grid size
  public nodeSize: number;                       // Snake node size
  public snake: Snake;                           // Snake          
  public food: Food;                             // Food
  public grid: Grid;                             // Grid
  public gameover: Boolean                       // Whether or not game is over
  public gamePaused: Boolean                     // Whether or not game is paused
  private tick: number;                          // Timer
  private speed: number;                         // speed

  constructor(userOpt: Option = {}) {
    const defaultOpt: Option = {
      size: 32,
      nodeSize: 10,
      speed: 200
    }
    const opt: Option = {...defaultOpt, ...userOpt};
    this.size = opt.size;
    this.nodeSize = opt.nodeSize;
    this.speed = opt.speed;
    this.gameover = false;
    this.gamePaused = false;
    this.tick = null;
    this.snake = new Snake();
    this.food = new Food(this);
    this.grid = new Grid(this);
    this.start();
  }

  // Update scenes to next tick
  update() {
    const nextPosition = this.snake.nextPosition();   // The position of snake head on the next tick
    // Wall impact checking
    if (
      nextPosition.x < 0
      || nextPosition.x > this.size-1
      || nextPosition.y < 0
      || nextPosition.y > this.size - 1
    ) {
      this.stop()
      return ;
    }

    // Self impact checking
    if (this.snake.body.length > 4) {
      for (let i = 4; i < this.snake.body.length; i++) {
        const node = this.snake.body[i];
        if (nextPosition.x === node.x && nextPosition.y === node.y) {
          this.stop();
          return ;
        }
      }
    }

    // Food impact detecting
    if (nextPosition.x === this.food.x && nextPosition.y === this.food.y) {
      this.snake.eat(this.food);
      this.food.new();
    }

    // update snake position for each node
    this.snake.update();
    // render all
    this.grid.render();
  }

  // Add controller for game
  addController(controller: Controller) {
    controller.addListener(this);
  }

  // Start game
  start(): void {
    this.grid.render();
    this.tick = setInterval(() => {
      this.update();
    }, this.speed);
  }

  // Game over
  stop(): void {
    clearInterval(this.tick);
    this.gameover = true;
  }

  // Pause game
  pause(): void {
    this.gamePaused = true;
    clearInterval(this.tick);
  }

  // Resume game
  resume(): void {
    this.gamePaused = false;
    this.tick = setInterval(() => {
      this.update();
    }, this.speed);
  }

  // Restart game
  restart(): void {
    clearInterval(this.tick);
    this.snake = new Snake();
    this.food = new Food(this);
    this.grid = new Grid(this);
    this.gameover = false;
    this.start();
  }

  up() {
    this.snake.up();
  }

  right() {
    this.snake.right();
  }

  down() {
    this.snake.down();
  }

  left() {
    this.snake.left();
  }
}