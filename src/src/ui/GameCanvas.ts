export class GameCanvas {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')!;
    }

    clearCanvas(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSnake(snake: any): void {
        const body = snake.getBody();
        body.forEach((segment: { x: number; y: number }, index: number) => {
            // Draw head in a different color
            this.context.fillStyle = index === 0 ? '#4CAF50' : '#8BC34A';
            this.context.fillRect(segment.x, segment.y, 10, 10);
            
            // Add border for better visibility
            this.context.strokeStyle = '#2E7D32';
            this.context.lineWidth = 1;
            this.context.strokeRect(segment.x, segment.y, 10, 10);
        });
    }

    drawFood(food: { x: number, y: number }): void {
        // Draw food as a circle
        this.context.fillStyle = '#FF5722';
        this.context.beginPath();
        this.context.arc(food.x + 5, food.y + 5, 5, 0, 2 * Math.PI);
        this.context.fill();
        
        // Add a highlight
        this.context.fillStyle = '#FF8A65';
        this.context.beginPath();
        this.context.arc(food.x + 3, food.y + 3, 2, 0, 2 * Math.PI);
        this.context.fill();
    }
}