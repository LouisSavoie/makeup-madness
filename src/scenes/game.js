import Phaser from 'phaser';
import WebFonts from '../webFonts';

export default class Game extends Phaser.Scene {

    init() {

        // SCORES
        this.preventions = 0;
        this.thefts = 0;
        this.reprimands = 0;
        this.fines = 0;
    };

    preload() {

        // LOAD GOOGLE FONTS
        const fonts = new WebFonts(this.load, 'Press Start 2P');
        this.load.addFile(fonts);

        // LOAD SFX
        
    };

    create() {

        // CREATE BACKGROUND

        // CREATE DISPLAYS

        // CREATE PLAYER

        // CREATE CUSTOMERS

        // CREATE THIEVES

        // CREATE COLLISIONS

        // CREATE CONTROLS

        // CREATE SCORES
        // score text style
        const scoreStyle = {
            fontSize: 24,
            fontFamily: '"Press Start 2P"'
        };
        
        // prevention score
        this.preventionsScoreLabel = this.add.text(190, 48, '0', scoreStyle).setOrigin(0.5, 0.5);

        // thefts score
        this.theftsScoreLabel = this.add.text(48, 48, '0', scoreStyle).setOrigin(0.5, 0.5);

        // reprimands score
        this.reprimandsScoreLabel = this.add.text(96, 48, '0', scoreStyle).setOrigin(0.5, 0.5);

        // fines score
        this.finesScoreLabel = this.add.text(142, 48, '0', scoreStyle).setOrigin(0.5, 0.5);

    };

    update() {

        // PLAYER CONTROLS

        // AI CONTROLS

        // SCORING

        // CHECK GAME OVER

    };

    // SCORING

};