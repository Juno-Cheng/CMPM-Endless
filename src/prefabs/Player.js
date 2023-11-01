class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        
        // Adding the player to the scene
        scene.add.existing(this);  // necessary for displaying the texture
        scene.physics.add.existing(this);  // necessary for physics to act on the sprite

        // Player physics properties. Adjust the body settings here as needed
        this.setCollideWorldBounds(true); // Player cannot move out of the game world

        // Initialize player properties from global variables
        this.moveSpeed = playerSpeed;
        this.jumpStrength = playerJumpForce;

        // You can set the initial velocity or any other properties here
    }

    update() {

        if (keys.keyLEFT.isDown) {
            this.setVelocityX(-this.moveSpeed);
        } else if (keys.keyRIGHT.isDown) {
            this.setVelocityX(this.moveSpeed);
        } else {
            this.setVelocityX(0);
        }
    
        if (Phaser.Input.Keyboard.JustDown(keys.keyUP) && this.body.touching.down) {
            this.setVelocityY(-this.jumpStrength);
        }
    }

    
}


