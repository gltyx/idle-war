class GameBG extends Phaser.Scene
{
	constructor()
	{
        super('GameBG');
		
		this.backgrounds = {};
		this.images = [];
		this.current_background_index = -1;
    }

    preload()
	{
		var self = this;
		$(this.backgrounds).each(function(index, background){
			$(game_backgrounds[background.group].images).each(function(image_index, image){
				self.load.image('layer-' + image[0], 'support/images/backgrounds/' + image[0]);
			});
		});

		this.load.audio(stories[player.current_story].missions[player.current_mission].music, [
			'support/music/' + stories[player.current_story].missions[player.current_mission].music + '.ogg',
			'support/music/' + stories[player.current_story].missions[player.current_mission].music + '.mp3'
		]);
    }

    create()
	{
		this.current_background_index = -1;

		this.loadBackground();
		playBGM(stories[player.current_story].missions[player.current_mission].music);
    }

    update()
	{
		if(this.backgrounds[this.current_background_index] != undefined && game_backgrounds[this.backgrounds[this.current_background_index].group].mode == 'scroll')
		{
			var self = this;
			$(game_backgrounds[this.backgrounds[this.current_background_index].group].images).each(function(index, image){
				if(self.images[index] != undefined)
					self.images[index].tilePositionY -= image[1];
			});
		}
	}
	
	loadBackground()
	{
		//Find which background to use based on player level
		var new_background_index = this.backgrounds.length - 1;
		$(this.backgrounds).each(function(index, background){
			if((player.level % stories[player.current_story].missions[player.current_mission].required_level) >= background.from_level)
				new_background_index = index;
		});

		if(new_background_index != this.current_background_index)
		{
			this.current_background_index = new_background_index;
			//Load new background images
			var self = this;
		
			$(self.images).each(function(index){
				self.images[index].destroy();
				self.images[index] = undefined;
			});
			
			self.images = [];
			$(game_backgrounds[this.backgrounds[this.current_background_index].group].images).each(function(index, image){
				self.images[index] = self.add.tileSprite(0, 0, image[2], image[3], 'layer-' + image[0]).setOrigin(0).setAlpha(0);
				self.tweens.add({
					targets: self.images[index],
					alpha: { value: 1, duration: 1000, ease: 'Power1' },
				});
			});
		}
	}
	
	setBackground(backgrounds)
	{
		this.backgrounds = backgrounds;
		this.scene.restart();
	}
    
    setVisible(flag)
    {
        this.scene.setVisible(flag);
		if(flag)
		{
			this.scene.start();
			this.scene.sendToBack();
		}
        else
            this.scene.stop();
    }
}