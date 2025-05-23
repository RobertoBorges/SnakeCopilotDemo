import { GameEngine } from './game/GameEngine.js';
import { GameCanvas } from './ui/GameCanvas.js';
import { GameControls } from './ui/GameControls.js';
import { ScoreDisplay } from './ui/ScoreDisplay.js';

export class App {
    private gameEngine: GameEngine;
    private gameCanvas: GameCanvas;
    private gameControls: GameControls;
    private scoreDisplay: ScoreDisplay;

    constructor() {
        this.gameCanvas = new GameCanvas('gameCanvas');
        this.scoreDisplay = new ScoreDisplay('scoreDisplay');
        this.gameEngine = new GameEngine(this.gameCanvas, this.scoreDisplay);
        this.gameControls = new GameControls((direction: string) => {
            this.gameEngine.changeDirection(direction);
        });
    }

    public start(): void {
        this.gameEngine.start();
    }
}