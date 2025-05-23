import { Snake } from './Snake.js';
import { Food } from './Food.js';
import { Grid } from './Grid.js';
import { GameCanvas } from '../ui/GameCanvas.js';
import { ScoreDisplay } from '../ui/ScoreDisplay.js';

export class GameEngine {
    private snake: Snake;
    private food: Food;
    private grid: Grid;
    private gameCanvas: GameCanvas;
    private scoreDisplay: ScoreDisplay;
    private score: number;
    private gameInterval: any;

    constructor(gameCanvas: GameCanvas, scoreDisplay: ScoreDisplay) {
        this.gameCanvas = gameCanvas;
        this.scoreDisplay = scoreDisplay;
        this.snake = new Snake();
        this.food = new Food();
        this.grid = new Grid(400, 400);
        this.score = 0;
    }

    start() {
        this.spawnFood();
        this.gameInterval = setInterval(() => this.update(), 100);
    }

    update() {
        this.snake.move();
        if (this.checkCollision()) {
            this.gameOver();
        } else if (this.checkFoodCollision()) {
            this.snake.grow();
            this.score++;
            this.scoreDisplay.updateScore(10);
            this.spawnFood();
        }
        this.render();
    }

    gameOver() {
        clearInterval(this.gameInterval);
        setTimeout(() => {
            if (confirm(`Game Over! Your score: ${this.score}\nPlay again?`)) {
                this.reset();
                this.start();
            }
        }, 100);
    }

    reset() {
        this.snake.reset();
        this.score = 0;
        this.scoreDisplay.resetScore();
        this.spawnFood();
    }

    changeDirection(direction: string) {
        const directions: { [key: string]: { x: number; y: number } } = {
            'up': { x: 0, y: -10 },
            'down': { x: 0, y: 10 },
            'left': { x: -10, y: 0 },
            'right': { x: 10, y: 0 }
        };
        if (directions[direction]) {
            this.snake.setDirection(directions[direction]);
        }
    }

    private spawnFood() {
        this.food.spawn(40, 40); // Grid cells (400/10 = 40)
    }

    private checkCollision(): boolean {
        const position = this.snake.getPosition();
        // Check wall collision
        const wallCollision = position.x < 0 || position.x >= 400 || position.y < 0 || position.y >= 400;
        // Check self collision
        const selfCollision = this.snake.hasCollidedWithItself();
        return wallCollision || selfCollision;
    }

    private checkFoodCollision(): boolean {
        const snakePos = this.snake.getPosition();
        const foodPos = this.food.getPosition();
        return snakePos.x === foodPos.x && snakePos.y === foodPos.y;
    }

    private render() {
        this.gameCanvas.clearCanvas();
        this.gameCanvas.drawSnake(this.snake);
        this.gameCanvas.drawFood(this.food.getPosition());
    }
}