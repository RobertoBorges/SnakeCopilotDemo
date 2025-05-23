// Debug script to check game functionality
console.log('Debug script loaded');

// Prevent scrolling with arrow keys
window.addEventListener('keydown', function(e) {
    // Space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        return false;
    }
}, false);

// Listen for events
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // Check if elements exist
    const gameCanvas = document.getElementById('gameCanvas');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const startButton = document.getElementById('startButton');
      console.log('Game Canvas exists:', !!gameCanvas);
    console.log('Score Display exists:', !!scoreDisplay);
    console.log('Start Button exists:', !!startButton);

    // Add click handler to canvas to keep focus
    if (gameCanvas) {
        gameCanvas.addEventListener('click', function() {
            this.focus();
        });
        // Force focus on canvas
        gameCanvas.setAttribute('tabindex', '1');
        gameCanvas.focus();
    }
    
    // Add direct event listeners to test button
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log('Start button clicked directly!');
            startButton.textContent = 'Game Started! (Debug)';
            startButton.disabled = true;
        });
    }
    
    // Test keyboard events
    window.addEventListener('keydown', (event) => {
        console.log('Key pressed:', event.key);
    });
    
    console.log('All event listeners set up');
});
