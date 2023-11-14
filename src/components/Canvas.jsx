import React from 'react';
import Phaser from 'phaser';

export default function Canvas(props) {



    const game = new Phaser.Game({
        parent: 'phaser-container',
    });

    return (
        <div id="phaser-container"></div>
    )
}