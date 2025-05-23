import { App } from './app.js';

const gameApp = new App();

// Add start button functionality
const startButton = document.getElementById('startButton') as HTMLButtonElement;
if (startButton) {
    startButton.addEventListener('click', () => {
        gameApp.start();
        startButton.textContent = 'Game Started!';
        startButton.disabled = true;
    });
}