export class ScoreDisplay {
    private score: number;
    private scoreElement: HTMLElement | null;

    constructor(scoreElementId: string) {
        this.score = 0;
        this.scoreElement = document.getElementById(scoreElementId);
        this.updateScoreDisplay();
    }

    public updateScore(points: number): void {
        this.score += points;
        this.updateScoreDisplay();
    }

    public resetScore(): void {
        this.score = 0;
        this.updateScoreDisplay();
    }

    private updateScoreDisplay(): void {
        if (this.scoreElement) {
            this.scoreElement.innerText = `Score: ${this.score}`;
        }
    }
}