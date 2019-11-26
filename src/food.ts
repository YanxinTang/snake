import Node from './node';

export default class Food extends Node {
  constructor() {
    super();
    this.new();
  }

  new() {
    this.x = Math.floor(Math.random() * 32);
    this.y = Math.floor(Math.random() * 32);
  }
}