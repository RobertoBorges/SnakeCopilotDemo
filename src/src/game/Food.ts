export class Food {
    private position: { x: number; y: number };

    constructor() {
        this.position = { x: 0, y: 0 };
    }

    spawn(gridWidth: number, gridHeight: number): void {
        this.position = {
            x: Math.floor(Math.random() * gridWidth) * 10,
            y: Math.floor(Math.random() * gridHeight) * 10,
        };
    }

    getPosition(): { x: number; y: number } {
        return this.position;
    }
}