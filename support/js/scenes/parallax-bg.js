class ParallaxBG extends Phaser.Scene
{
    constructor()
	{
        super('ParallaxBG');
    }

    preload()
	{
        this.load.image('space-bg-layer-1', 'support/images/main-menu/bg-layer-1-2x.png');
		this.load.image('space-bg-layer-2', 'support/images/main-menu/bg-layer-2-2x.png');
		this.load.image('space-bg-layer-3', 'support/images/main-menu/bg-layer-3-2x.png');
		this.load.image('space-bg-layer-4', 'support/images/main-menu/bg-layer-4-2x.png');
    }

    create()
	{
		// ﻿Base width and height of the images
		let imageBaseWidth = 880;
		let imageBaseHeight = 1760;
			
		this.background_layer_1 = this.add.tileSprite(0, -400, imageBaseWidth, imageBaseHeight, 'space-bg-layer-1').setOrigin(0).setAlpha(0);
		this.tweens.add({
			targets: this.background_layer_1,
			alpha: { value: 1, duration: 1000, ease: 'Power1' },
		});
		 
		this.background_layer_2 = this.add.tileSprite(0, 0, imageBaseWidth, imageBaseHeight, 'space-bg-layer-2').setOrigin(0).setAlpha(0);
		this.tweens.add({
			targets: this.background_layer_2,
			alpha: { value: 1, duration: 1000, ease: 'Power1' },
		});
		
		this.background_layer_3 = this.add.tileSprite(0, 0, imageBaseWidth, imageBaseHeight, 'space-bg-layer-3').setOrigin(0).setAlpha(0);
		this.tweens.add({
			targets: this.background_layer_3,
			alpha: { value: 1, duration: 1000, ease: 'Power1' },
		});
		
		this.background_layer_4 = this.add.tileSprite(0, 0, imageBaseWidth, imageBaseHeight, 'space-bg-layer-4').setOrigin(0).setAlpha(0);
		this.tweens.add({
			targets: this.background_layer_4,
			alpha: { value: 1, duration: 1000, ease: 'Power1' },
		});
    }

    update()
	{
        this.background_layer_2.tilePositionY += 0.1;
		this.background_layer_3.tilePositionY += 0.2;
		this.background_layer_4.tilePositionY += 0.15;
    }
    
    setVisible(flag)
    {
        this.scene.setVisible(flag);
        if(flag)
            this.scene.start();
        else
            this.scene.stop();
    }
}