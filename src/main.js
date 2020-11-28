// IMPORTS
import Phaser from 'phaser';

// CONFIG
const config = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            //debug: true
        }
    }
};

// INSTANTIATE GAME
const game = new Phaser.Game(config);

// ADD SCENES

// START SCENE