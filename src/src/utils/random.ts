export function getRandomPosition(gridSize: number): { x: number; y: number } {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
}