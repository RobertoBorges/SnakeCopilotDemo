export function checkCollision(snake: { positions: { x: number; y: number }[] }, food: { position: { x: number; y: number } }, gridSize: number): boolean {
    // Check if the snake's head collides with the food
    const head = snake.positions[0];
    if (head.x === food.position.x && head.y === food.position.y) {
        return true;
    }

    // Check if the snake collides with the walls
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        return true;
    }

    // Check if the snake collides with itself
    for (let i = 1; i < snake.positions.length; i++) {
        if (head.x === snake.positions[i].x && head.y === snake.positions[i].y) {
            return true;
        }
    }

    return false;
}