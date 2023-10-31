//If you’re new to JavaScript, you might’ve noticed that odd keyword this while typing the above code. 
//this is a confusing concept in JS, but the basic idea is that it’s a special keyword bound to the current 
//object context. In the example above, this references the Scene object.

class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    preload() {
        // load images/tile sprites
        //this class, load image, name, location
        //The load.image() method expects two parameters: a string with the key name of the graphic 
        //you’re going to use (so you can reference it later in your program) and the URL for where your graphic is located.

        // Load a spritesheet 'explosion' and define each frame's dimensions and sequence within the larger image file.
        // Sheet is frames of images, and it read throught it.
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
        

    }

    update(time, delta) {
        
    }



    



} 