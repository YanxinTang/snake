import Game from './game';

export default class Controller {
  private listeners: Game[]

  constructor() {
    this.listeners = [];
    this.events();
  }

  addListener(listener: Game): void {
    this.listeners.push(listener);
  }

  events(): void {
    window.addEventListener('keydown', (event) => {
      switch(event.key) {
        case 'ArrowUp': {
          this.listeners.forEach(listener => listener.up());
          break;
        }
        case 'ArrowRight': {
          this.listeners.forEach(listener => listener.right());
          break;
        }
        case 'ArrowDown': {
          this.listeners.forEach(listener => listener.down());
          break;
        }
        case 'ArrowLeft': {
          this.listeners.forEach(listener => listener.left());
          break;
        }
        case 'Space': {
          break;
        }
        default: 
        break
      }
    });
  }
}