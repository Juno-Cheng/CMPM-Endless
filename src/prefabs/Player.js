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

        // Player movement - left and right
        if (keyLEFT.isDown) {
            this.setVelocityX(-this.moveSpeed); // move left
        } else if (keyRIGHT.isDown) {
            this.setVelocityX(this.moveSpeed); // move right
        } else {
            this.setVelocityX(0); 
        }

        // Player jump. The player can jump while touching the ground
        if (Phaser.Input.Keyboard.JustDown(keyUP) && this.body.touching.down) {
            this.setVelocityY(-this.jumpStrength); // jump up
        }
    }
}


