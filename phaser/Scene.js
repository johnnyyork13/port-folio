import Phaser from 'phaser';

export default class Scene extends Phaser.Scene{
    constructor() {
        super('scene')
        this.player;
        this.camera;
        this.stars;
        this.bombs;
        this.platforms;
        this.cursors;
        this.score = 0;
        this.gameOver = false;
        this.scoreText;
    }

    preload ()
    {
        this.load.image('background', '/src/phaser/tilesets/bg.png');
        this.load.image('tiles', '/src/phaser/tilesets/tiles-v1.png');
        this.load.tilemapTiledJSON('mario-tilemap', '/src/phaser/tilesets/mario-tileset.json');
        this.load.spritesheet('dude', '/src/phaser/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }



    

    // // set background color, so the sky is not black  
    // this.camera.setBackgroundColor('#000000');

    create ()
    {
        this.camera = this.cameras.main.setBounds(0, 0, 640, 340);
        // make the camera follow the player  
        const background = this.add.image(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 2,
            'background');
        
        const scaleX = this.cameras.main.width / background.width;
        const scaleY = this.cameras.main.height / background.height;
        const scale = Math.max(scaleX, scaleY);

        background.setScale(scale).setScrollFactor(0);
        const map = this.make.tilemap({key: "mario-tilemap"});

        const tileset = map.addTilesetImage('mario-tileset', 'tiles');
        const floor = map.createLayer("Floor", tileset);

        this.player = this.physics.add.sprite(150, 10, 'dude');

        floor.setCollisionByExclusion([-1]);
        this.physics.add.collider(this.player, floor);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.camera.startFollow(this.player);
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);

            //this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            
            this.player.setVelocityX(160);

            //this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            //this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
}