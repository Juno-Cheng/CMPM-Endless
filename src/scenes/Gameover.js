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
        let textStyle = { font: '20px Arial', fill: '#ffffff', align: 'center', lineSpacing: 5 };
        let text = this.add.text(this.scale.width / 2, this.scale.height / 2, helpText, textStyle);
        text.setOrigin(0.5); // Center the text

        // Create a 'Restart' button
        let backButton = this.add.text(this.scale.width / 2, (this.scale.height / 2) + 30, 'Restart', { font: '24px Arial', fill: '#ff0' }); // Offset the Y position so it doesn't overlap with the Game Over text
        backButton.setInteractive({ useHandCursor: true });
        backButton.on('pointerdown', () => this.scene.start('playScene')); // start the play scene
    }
}
