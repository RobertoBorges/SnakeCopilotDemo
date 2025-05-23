export class Grid {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    isWithinBounds(position: { x: number; y: number }): boolean {
        return position.x >= 0 && position.x < this.width && position.y >= 0 && position.y < this.height;
    }

    render(context: CanvasRenderingContext2D): void {
        context.fillStyle = '#000';
        context.fillRect(0, 0, this.width, this.height);
    }
}