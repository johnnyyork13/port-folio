import Phaser from 'phaser';

export default class Scene extends Phaser.Scene{
    constructor() {
        super('scene')
        this.player;
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
        this.load.image('zelda-tiles', '/src/phaser/tilesets/zelda-tiles.png');
        this.load.tilemapTiledJSON('tilemap', '/src/phaser/tilesets/port.json');
        // this.load.image("testBox", '/src/phaser/assets/test-box.png');
        // this.load.image('sky', '/src/phaser/assets/sky.png');
        // this.load.image('ground', '/src/phaser/assets/platform.png');
        // this.load.image('star', '/src/phaser/assets/star.png');
        // this.load.image('bomb', '/src/phaser/assets/bomb.png');
        // this.load.spritesheet('dude', '/src/phaser/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create ()
    {
        //this.add.image(0,0,'zelda-tiles');
        //console.log(this.make);
        const map = this.make.tilemap({key: "tilemap"});

        const tileset = map.addTilesetImage('port', 'zelda-tiles');
        //console.log(map);
        map.createLayer(0, tileset);


        //this.add.image(50, 50, 'testBox');
        // this.add.image(400, 300, 'sky');

        // this.platforms = this.physics.add.staticGroup();

        // this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        // this.platforms.create(600, 400, 'ground');
        // this.platforms.create(50, 250, 'ground');
        // this.platforms.create(750, 220, 'ground');
    }

    update ()
    {
    }
}