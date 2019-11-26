import Node from './node';
import Food from './food';

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

interface Position {
  x: number
  y: number
}

export default class Snake {
  public body: Node[];
  private direction: Direction;
  public nextDirection: Direction;

  constructor() {
    this.body = [];
    this.direction = Direction.Right;
    this.nextDirection = this.direction;
    this.born();
  }

  born(): void {
    let headX: number = 4; 
    let headY: number = 4;
    this.body.push(new Node(headX, headY));

    for (let i = 0; i < 2; i++) {
      const [dx, dy] = this.d(this.direction >=2 ? this.direction - 2 : this.direction + 2);
      headX += dx;
      headY += dy;
      this.body.push(new Node(headX, headY))
    }
  }

  nextPosition(): Position {
    const [dx, dy] = this.d(this.nextDirection);
    const head = this.body[0];
    return {
      x: head.x + dx,
      y: head.y + dy,
    }
  }

  eat(food: Food): void {
    this.body.unshift(new Node(food.x, food.y));
  }

  setDirection(direction: Direction): void {
    if (direction !== (this.direction >=2 ? this.direction - 2 : this.direction + 2)) {
      this.nextDirection = direction;
    }
  }

  d(direction: Direction) {
    if (direction === Direction.Up) { return [0, -1] };
    if (direction === Direction.Right) { return [1, 0] };
    if (direction === Direction.Down) { return [0, 1] };
    return [-1, 0]
  }

  up() {
    this.setDirection(Direction.Up);
  }

  right() {
    this.setDirection(Direction.Right);
  }

  down() {
    this.setDirection(Direction.Down);
  }

  left() {
    this.setDirection(Direction.Left);
  }

  update() {
    this.direction = this.nextDirection;
    const [dx, dy] = this.d(this.direction);
    for (let i = this.body.length - 1; i >= 0; i--) {
      const node = this.body[i];
      if (i === 0) {
        node.x += dx;
        node.y += dy;
      } else {
        node.x = this.body[i-1].x;
        node.y = this.body[i-1].y;
      }
    }
  }
}