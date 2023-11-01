//If you’re new to JavaScript, you might’ve noticed that odd keyword this while typing the above code. 
//this is a confusing concept in JS, but the basic idea is that it’s a special keyword bound to the current 
//object context. In the example above, this references the Scene object.

class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.score = 0;
    }
    
    preload() {
        // load images/tile sprites
        //this class, load image, name, location
        //The load.image() method expects two parameters: a string with the key name of the graphic 
        //you’re going to use (so you can reference it later in your program) and the URL for where your graphic is located.
        this.load.image('arrow', './assets/Arrow.png');
        this.load.image('player', './assets/Player.png');
        this.load.image('platform', './assets/island.png');
        this.load.image('background', './assets/background.png');

        // Load a spritesheet 'explosion' and define each frame's dimensions and sequence within the larger image file.
        // Sheet is frames of images, and it read throught it.
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        //Background
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
        this.background.setOrigin(0, 0);

        //Group:
        this.platforms = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        //Start with Player spawning in the middle and 1 large platform the is scaled, so a spawning point, the platform will slowly move to the left
        this.player = new Player(this, config.width / 2, config.height / 2, 'player');

        // Create the initial spawning platform
        this.spawnPlatform(config.width / 2, config.height - 60); 

        this.spawnInterval = setInterval(() => {
            this.spawnPlatform(config.width, Phaser.Math.Between(config.height - 100, config.height - 50), 1);
        }, 2000);
        
        this.physics.add.collider(this.player, this.platforms);

        //Define Keys
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }

    update(time, delta) {
        this.background.tilePositionX -= .5;
        this.player.update({
            keyLEFT: this.keyLEFT,
            keyRIGHT: this.keyRIGHT,
            keyUP: this.keyUP
        });

        if (this.player.y > config.height) {
            this.gameOver();
        }

        this.platforms.getChildren().forEach(platform => {
            platform.update();
            
            if (platform.x + platform.width/2 < 0) {
                platform.destroy();
            }

        });
    }

    spawnPlatform(x, y, scaleX) {
        if (!this.platforms) {
            this.platforms = this.physics.add.group();
        }
        let platform = new Platform(this, x, y, 'platform');
        this.platforms.add(platform);
    }

    increasePlatformSpeed() {
        this.platformSpeed += 10; // Ensure you have this.platformSpeed initialized somewhere in the class
    }

    gameOver() {
        this.scene.start('GameOverScene');
    }

} 