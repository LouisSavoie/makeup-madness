// IMPORTS
import Phaser from 'phaser';

import TitleScreen from './scenes/titleScreen';
import Game from './scenes/game';

// CONFIG
const config = {
    width: 1280,
    height: 720,
    //center of screen = 640, 360
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    }
};

// INSTANTIATE GAME
const game = new Phaser.Game(config);

// ADD SCENES
game.scene.add('titleScreen', TitleScreen);
game.scene.add('game', Game);

// START SCENE
// game.scene.start('titleScreen');

// for testing
game.scene.start('game');