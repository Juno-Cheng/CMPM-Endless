class MenuScene extends Phaser.Scene {
  constructor() {
      super('MenuScene'); // This refers to the identifier for this scene
  }

  preload() {
      // Load assets
      this.load.image('background', './assets/background.png');
      this.load.audio('backgroundMusic', './assets/background.mp3');
  }

  create() {
      // Add background image
      this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
      this.background.setOrigin(0, 0);

      // Add title text
      let title = this.add.text(this.cameras.main.centerX, 100, 'Game Title', { font: '40px Arial', fill: '#ffffff' });
      title.setOrigin(0.5, 0.5); // Center the title

      // Add buttons
      let playButton = this.add.text(this.cameras.main.centerX, 200, 'Start', { font: '32px Arial', fill: '#ff0000' });
      playButton.setInteractive({ useHandCursor: true });
      playButton.setOrigin(0.5, 0.5);
      playButton.on('pointerdown', () => this.scene.start('PlayScene')); // 'PlayScene' refers to the identifier for your main game scene

      let helpButton = this.add.text(this.cameras.main.centerX, 260, 'Help', { font: '32px Arial', fill: '#ff0000' });
      helpButton.setInteractive({ useHandCursor: true });
      helpButton.setOrigin(0.5, 0.5);
      helpButton.on('pointerdown', () => this.scene.start('HelpScene')); // 'HelpScene' refers to the identifier for your help scene


      // Play background music
      let music = this.sound.add('backgroundMusic');
      music.play({
        loop: true // This will make the track loop
      });


  }

  update() {
    this.background.tilePositionX -= 1;  //Shifts Background texture
  }
}
