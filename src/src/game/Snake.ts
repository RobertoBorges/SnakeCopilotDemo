export class Snake {
    private body: { x: number; y: number }[];
    private direction: { x: number; y: number };

    constructor() {
        this.body = [{ x: 200, y: 200 }]; // Start in center
        this.direction = { x: 10, y: 0 }; // Initial direction to the right
    }

    move() {
        const head = { ...this.body[0] };
        head.x += this.direction.x;
        head.y += this.direction.y;
        
        this.body.unshift(head);
        this.body.pop(); // Remove tail unless growing
    }

    grow() {
        const tail = { ...this.body[this.body.length - 1] };
        this.body.push(tail);
    }

    reset() {
        this.body = [{ x: 200, y: 200 }];
        this.direction = { x: 10, y: 0 };
    }

    setDirection(newDirection: { x: number; y: number }) {
        // Prevent the snake from reversing
        if (this.direction.x + newDirection.x !== 0 || this.direction.y + newDirection.y !== 0) {
            this.direction = newDirection;
        }
    }

    getPosition() {
        return this.body[0]; // Return head position
    }

    getBody() {
        return this.body;
    }

    getLength() {
        return this.body.length;
    }

    hasCollidedWithItself(): boolean {
        const head = this.body[0];
        return this.body.slice(1).some(segment => 
            segment.x === head.x && segment.y === head.y
        );
    }
}