import Phaser from 'phaser';
import WebFonts from '../webFonts';

export default class TitleScreen extends Phaser.Scene {
    preload() {

        // GOOGLE FONT
        const fonts = new WebFonts(this.load, 'Press Start 2P');
        this.load.addFile(fonts);

    };
    create() {

        // TITLE
        this.title = this.add.text(640, 300, 'MAKEUP MADNESS', {
            fontSize: 72,
            fontFamily: '"Press Start 2P"'
        }).setOrigin();

        // PLAY MESSAGE
        this.add.text(640, 550, 'Press SPACE to PLAY', {
            fontSize: 16,
            fontFamily: '"Press Start 2P"'
        }).setOrigin();

        // INSTRUCTIONS MESSAGE
        this.add.text(640, 600, 'Press ENTER for INSTRUCTIONS', {
            fontSize: 16,
            fontFamily: '"Press Start 2P"'
        }).setOrigin();

        // PLAY BUTTON
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('game');
        });

        // INSTRUCTIONS BUTTON
        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('instructions');
        });

    };
};