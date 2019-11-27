# Intruction

This project is an implement of snake game based on Typescript.

# Create a game

You can use it easily to create a snake game in the browser

```javascript
const option = { speed: 100 };

const controller = new Controller();    // Create a controller
const game = new Game(option);  // Create a game
game.addController(controller);         // Add controller to the game
```

### option
  - size: number        The size of game container grid
  - nodeSize: number    The pixel of each grid
  - speed: number       Refresh rate
  - container: string   Canvas element selector