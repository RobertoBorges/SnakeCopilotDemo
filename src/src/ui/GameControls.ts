export class GameControls {
    private upKey: string;
    private downKey: string;
    private leftKey: string;
    private rightKey: string;
    private onChange: (direction: string) => void;

    constructor(onChange: (direction: string) => void) {
        this.upKey = 'ArrowUp';
        this.downKey = 'ArrowDown';
        this.leftKey = 'ArrowLeft';
        this.rightKey = 'ArrowRight';
        this.onChange = onChange;

        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    private handleKeyDown(event: KeyboardEvent): void {
        switch (event.key) {
            case this.upKey:
                event.preventDefault(); // Prevent scrolling
                this.onChange('up');
                break;
            case this.downKey:
                event.preventDefault(); // Prevent scrolling
                this.onChange('down');
                break;
            case this.leftKey:
                event.preventDefault(); // Prevent scrolling
                this.onChange('left');
                break;
            case this.rightKey:
                event.preventDefault(); // Prevent scrolling
                this.onChange('right');
                break;
        }
    }
}