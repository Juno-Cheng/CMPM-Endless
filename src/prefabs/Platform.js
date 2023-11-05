class Platform extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, scaleX=.7, scaleY=.7) {
        super(scene, x, y, texture);

        // Add this platform object to both the physics world and the scene
        scene.physics.add.existing(this);
        scene.add.existing(this);

        // Apply the scaling
        this.setScale(scaleX, scaleY);

        // Make sure the platform doesn't get affected by gravity and won't move upon collisions
        this.body.allowGravity = false;
        this.body.immovable = true; 

        const height = this.height *0.;
        const reducedHeight = height * 0.8;
        const offsetY = height * 0.1;
        this.body.setSize(this.width, reducedHeight);
        this.body.setOffset(0, offsetY);
    }
    update() {
        // Move the platform left; the speed should be set in a way that it's consistent with the game's timing
        this.body.setVelocityX(-platformSpeed); 

        // Check if the platform is out of the screen bounds (left side)
        if (this.x + this.width < 0) {
            this.destroy(); 
        }
    }
}

