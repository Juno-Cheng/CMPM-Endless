class Gameover extends Phaser.Scene {
    constructor() {
        super('GameOverScene'); 
    }

    create() {
        // Set the background color
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
        this.background.setOrigin(0, 0);

        // Add text with the game controls
        let helpText = "Game Over";
        let textStyle = { font: '40px Arial', fill: '#ffffff', align: 'center', lineSpacing: 5 };
        
        // Center the text on the canvas
        let text = this.add.text(config.width / 2, (config.height / 2)-20, helpText, textStyle);
        text.setOrigin(0.5); // Center the text

        // Create a 'Restart' button
        let backButton = this.add.text(config.width / 2, (config.height / 2) + 30, 'Restart', { font: '24px Arial', fill: '#ff0' }); 
        backButton.setOrigin(0.5);  // Center the text
        backButton.setInteractive({ useHandCursor: true });
        backButton.on('pointerdown', () => this.scene.start('playScene')); 
    }
}

