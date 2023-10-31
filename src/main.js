// Game configuration
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 290,
  scene: [MenuScene, Play, HelpScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH},
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 }, 
          debug: false  
      }
  }
};

let game = new Phaser.Game(config);

// General UI sizes for any boundary or UI elements in the game
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// Player movement and physics constants
let playerJumpForce = -330; // force at which the player character jumps up
let playerSpeed = 200;      // horizontal speed of the player

// Platform setting
let platformSpeed = 150;    // speed at which platforms move toward the player
let platformSpacing = 200;  // gap between platforms for jumping

// Scoring system
let score = 0;              // player's current score
let highScore = 0;          // highest score achieved

// reserve keyboard vars for input
let keyUP, keyLEFT, keyRIGHT;

// Game status flags
let gameOver = false;      // track if the game is currently in an over state

// Sound effects and music variables
let backgroundMusic;
let jumpSoundEffect;
let gameOverSoundEffect;

