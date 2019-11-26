import Snake from "./snake";
import Food from "./food";
import Grid from "./grid";
import Controller from "./controller";

export default class Game {
  public size: number;                           // Grid size
  public nodeSize: number;                       // Snake node size
  public snake: Snake;                           // Snake          
  public food: Food;                             // Food
  public grid: Grid;                             // Grid
  private tick: number;                          // Timer
  private speed: number;                         // speed

  constructor(size: number = 32) {
    this.size = size;
    this.nodeSize = 10;
    this.snake = new Snake();
    this.food = new Food();
    this.grid = new Grid(this);
    this.tick = null;
    this.speed = 200;
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
  }

  // Pause game
  pause(): void {
    this.stop();
  }

  // Resume game
  resume(): void {
    this.tick = setInterval(() => {
      this.update();
    }, this.speed);
  }

  // Restart game
  restart(): void {
    this.snake = new Snake();
    this.food = new Food();
    this.grid = new Grid(this);
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