import Phaser from 'phaser';

import Scene from './Scene.js';

const config = {
    type: Phaser.AUTO,
    // width: 800,
    // height: 600,
    parent: 'phaser-container',
    scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene],
};

export default new Phaser.Game(config);