class Platform extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        // Add this platform object to both the physics world and the scene
        scene.physics.add.existing(this);
        scene.add.existing(this);

        // Make sure the platform doesn't get affected by gravity and won't move upon collisions
        this.body.allowGravity = false;
        this.body.immovable = true; 
    }

    update() {
        // Move the platform left; the speed should be set in a way that it's consistent with the game's timing
        this.body.setVelocityX(-platformSpeed); 

        // Check if the platform is out of the screen bounds (left side)
        if (this.x + this.width < 0) { // this.width is added to fully wait for the platform to go off-screen
            this.destroy(); // or you could set flags to reuse it
        }
    }
}

