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

        // LOAD IMAGES
        this.load.image('tiles', '../assets/tiles.png');
        this.load.tilemapTiledJSON('map', '../assets/map.json');
        this.load.spritesheet('guy', '../assets/guy.png',
            { frameWidth: 32, frameHeight: 48 }
        );

        // LOAD GOOGLE FONTS
        const fonts = new WebFonts(this.load, 'Press Start 2P');
        this.load.addFile(fonts);

        // LOAD SFX
        
    };

    create() {

        // CREATE MAP
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('makeupMadnessPH', 'tiles');

        map.createStaticLayer('Ground', tileset, 0, 8);
        const displaysLayer = map.createStaticLayer('Displays', tileset, 0, 8);

        displaysLayer.setCollisionByProperty({ collides: true });

        // CREATE WORLD BOUNDS
        // this.physics.world.setBounds(-40, 0, 1320, 720);

        // CREATE DISPLAYS
        // const displays = this.physics.add.staticGroup();
        // displays.create(1240, 200, 'display');
        // displays.create(1240, 600, 'display');
        // displays.create(920, 200, 'display');
        // displays.create(600, 200, 'display');

        // CREATE PLAYER
        this.player = this.physics.add.sprite(100, 450, 'guy').setScale(2).refreshBody();
        this.player.setCollideWorldBounds(true);

        // player animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('guy', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'guy', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('guy', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        // CREATE CUSTOMERS

        // CREATE THIEVES

        // CREATE COLLISIONS
        this.physics.add.collider(this.player, displaysLayer);

        // CREATE PLAYER CONTROLS
        this.cursors = this.input.keyboard.createCursorKeys();

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

        // LISTEN TO PLAYER CONTROLS
        this.movePlayer();

        // AI CONTROLS

        // SCORING

        // CHECK GAME OVER

    };

    // PLAYER CONTROLS
    movePlayer() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityY(0);
            this.player.setVelocityX(-200);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityY(0);
            this.player.setVelocityX(200);
            this.player.anims.play('right', true);
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityX(0);
            this.player.setVelocityY(-200);
            this.player.anims.play('turn');
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityX(0);
            this.player.setVelocityY(200);
            this.player.anims.play('turn');
        } else {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.play('turn');
        }
    };

    // SCORING

};