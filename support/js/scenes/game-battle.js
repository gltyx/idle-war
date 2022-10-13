class GameBattle extends Phaser.Scene
{
	constructor()
	{
        super('GameBattle');
    }

    preload()
	{
		var self = this;
		// Enemies
		$.each(enemies_stats, function(enemy_index, enemy){
			self.load.image('enemy-' + enemy.image, 'support/images/enemies/' + enemy.image);
			self.load.image('enemy-' + enemy.image_medium, 'support/images/enemies/' + enemy.image_medium);
			self.load.image('enemy-' + enemy.projectile, 'support/images/enemies/' + enemy.projectile);
			self.load.image('enemy-' + enemy.projectile_hit, 'support/images/enemies/' + enemy.projectile_hit);
		});
		
		// Ships
		$.each(ship_stats, function(hero_index, hero){
			self.load.image('hero-' + hero.image, 'support/images/heroes/' + hero.image);
			self.load.image('hero-' + hero.projectile, 'support/images/heroes/' + hero.projectile);
			self.load.image('hero-' + hero.projectile_hit, 'support/images/heroes/' + hero.projectile_hit);
		});

		self.load.image('enemy-explosion-1', 'support/images/enemies/explosion/Explosion1_1.png');
		self.load.image('enemy-explosion-2', 'support/images/enemies/explosion/Explosion1_2.png');
		self.load.image('enemy-explosion-3', 'support/images/enemies/explosion/Explosion1_3.png');
		self.load.image('enemy-explosion-4', 'support/images/enemies/explosion/Explosion1_4.png');
		self.load.image('enemy-explosion-5', 'support/images/enemies/explosion/Explosion1_5.png');
		self.load.image('enemy-explosion-6', 'support/images/enemies/explosion/Explosion1_6.png');
		self.load.image('enemy-explosion-7', 'support/images/enemies/explosion/Explosion1_7.png');
		self.load.image('enemy-explosion-8', 'support/images/enemies/explosion/Explosion1_8.png');
		self.load.image('enemy-explosion-9', 'support/images/enemies/explosion/Explosion1_9.png');
		self.load.image('enemy-explosion-10', 'support/images/enemies/explosion/Explosion1_10.png');
		self.load.image('enemy-explosion-11', 'support/images/enemies/explosion/Explosion1_11.png');
    }

    create()
	{
		this.projectiles = [];
		this.enemies = [];
		this.player_ships = [];
		this.gettingProjectile = false;
		this.game_runing = false;

		this.anims.create({
			key: 'explosion',
			frames: [
				{ key: 'enemy-explosion-1' },
				{ key: 'enemy-explosion-2' },
				{ key: 'enemy-explosion-3' },
				{ key: 'enemy-explosion-4' },
				{ key: 'enemy-explosion-5' },
				{ key: 'enemy-explosion-6' },
				{ key: 'enemy-explosion-7' },
				{ key: 'enemy-explosion-8' },
				{ key: 'enemy-explosion-9' },
				{ key: 'enemy-explosion-10' },
				{ key: 'enemy-explosion-11' }
			],
			frameRate: 25,
			repeat: 0,
			showOnStart: true,
			hideOnComplete: true
		});

		this.explosions = this.add.group();
    }
	
	update()
	{
		if(!this.game_runing)
		{
			this.game_runing = true;
			continueGameAux();
		}
		
		this.physics.collide(this.projectiles, this.enemies, this.projectileEnemyCollision, null, this);
		this.physics.collide(this.projectiles, this.player_ships, this.projectilePlayerShipCollision, null, this);
    }

	getNextAvailableExplosion()
	{
		var selected_explosion = null;
		this.explosions.children.each(function(explosion){
			if(!explosion.visible)
				selected_explosion = explosion;
		});
		if(selected_explosion == null)
		{
			this.explosions.create(0, 0, 'explosion', 0, true, false);
			selected_explosion = this.explosions.getLast();
		}

		return selected_explosion;
	}

	addEnemy(enemy)
	{
		var use_id = this.enemies.indexOf(null);
		if(use_id == -1)
		{
			this.enemies.push(enemy);
			use_id = this.enemies.length - 1;
		}
		else
			this.enemies[use_id] = enemy;

		return use_id;
	}

	removeEnemy(index)
	{
		if(this.enemies[index] != null)
		{
			this.enemies[index].health_bar.destroy();
			this.enemies[index].destroy();
			this.enemies[index] = null;
		}
	}

	removeAllEnemies()
	{
		$(this.enemies).each(function(index, enemy){
			if(enemy != null)
			{
				enemy.health_bar.destroy();
				enemy.destroy();
			}
		});
		this.enemies = [];
	}
	
	addPlayerShip(ship)
	{
		this.player_ships.push(ship);
		return (this.player_ships.length - 1);
	}

	addProjectile(projectile)
	{
		while(this.gettingProjectile){
			debug('====== LOCKED ======', 3);
		}
		this.gettingProjectile = true;
		
		var use_id = this.projectiles.indexOf(null);
		if(use_id == -1)
		{
			this.projectiles.push(projectile);
			use_id = this.projectiles.length - 1;
		}
		else
			this.projectiles[use_id] = projectile;
		
		this.gettingProjectile = false;
		return use_id;
	}

	removeProjectile(index)
	{
		if(this.projectiles[index] != null)
		{
			if(this.projectiles[index].explosion != null)
				this.projectiles[index].explosion.destroy();
			this.projectiles[index].destroy();
			this.projectiles[index] = null;
			return true;
		}
		return false;
	}

	resetBattle(including_player_ships)
	{
		debug('Resetting battle ' + (including_player_ships ? 'and removing player ships' : ''), 3);
		this.scene.bringToTop();
		this.time.removeAllEvents();
		this.tweens.killAll();
		
		this.removeAllEnemies();
		this.gettingProjectile = false;

		if(including_player_ships)
		{
			$(this.player_ships).each(function(index, ship){
				if(ship != null)
				{
					ship.health_bar.destroy();
					ship.destroy();
				}
			});
			this.player_ships = [];
		}
		
		$(this.projectiles).each(function(index, projectile){
			if(projectile != null)
			{
				if(projectile.explosion != null)
					projectile.explosion.destroy();
				projectile.destroy();
			}
		});
		this.projectiles = [];
	}

	projectileEnemyCollision(obj1, obj2)
	{
		//obj1 = projectile //obj2 = enemy
		if(obj1.from == 'player' && !obj1.hasHit)
		{
			obj1.hasHit = true;

			if(this.enemies[obj2.index] == null)
				return;

			obj1.explosion = this.add.image(obj1.x, obj1.y, 'hero-' + obj1.sprite);
			obj1.explosion.setDepth(3);
			if(obj1.custom_tint != null)
				obj1.explosion.tint = obj1.custom_tint;
			obj1.explosion.scale = 0;
			this.tweens.add({
				targets: obj1.explosion,
				scale: { value: 1.5, duration: 150, ease: 'easeIn' },
				alpha: { value: 0, duration: 200, ease: 'easeInOut' },
				onComplete: function(tween, targets){
					targets[0].destroy();
				}
			});

			var enemy_killed = false;
			player.milestones.hits_on_enemy = (player.milestones.hits_on_enemy || 0) + 1;
			player.milestones.total_damage_given = (player.milestones.total_damage_given || 0) + obj1.damage;

			obj1.setVisible(false);
			var is_boss = obj2.isBoss;
			if(hit_foe(this.enemies[obj2.index], obj1.damage, obj1.hero_slot_id, global_equipment_bonuses.xp_boost))
			{
				this.removeEnemy(obj2.index);
				enemy_killed = true;
				
				player.milestones.total_kills = (player.milestones.total_kills || 0) + 1;
				if(is_boss)
					player.milestones.total_boss_kills = (player.milestones.total_boss_kills || 0) + 1;
			}

			switch(obj1.player_ship)
			{
				case 'hero-1':
					player.milestones.stargazer_hits_on_enemy = (player.milestones.stargazer_hits_on_enemy || 0) + 1;
					player.milestones.stargazer_damage_given = (player.milestones.stargazer_damage_given || 0) + obj1.damage;
					if(enemy_killed)
					{
						player.milestones.stargazer_kills = (player.milestones.stargazer_kills || 0) + 1;
						if(is_boss)
							player.milestones.stargazer_boss_kills = (player.milestones.stargazer_boss_kills || 0) + 1;
					}
					break;
				case 'hero-2':
					player.milestones.bruiser_hits_on_enemy = (player.milestones.bruiser_hits_on_enemy || 0) + 1;
					player.milestones.bruiser_damage_given = (player.milestones.bruiser_damage_given || 0) + obj1.damage;
					if(enemy_killed)
					{
						player.milestones.bruiser_kills = (player.milestones.bruiser_kills || 0) + 1;
						if(is_boss)
							player.milestones.bruiser_boss_kills = (player.milestones.bruiser_boss_kills || 0) + 1;
					}
					break;
				case 'hero-3':
					player.milestones.relief_hits_on_enemy = (player.milestones.relief_hits_on_enemy || 0) + 1;
					player.milestones.relief_damage_given = (player.milestones.relief_damage_given || 0) + obj1.damage;
					if(enemy_killed)
					{
						player.milestones.relief_kills = (player.milestones.relief_kills || 0) + 1;
						if(is_boss)
							player.milestones.relief_boss_kills = (player.milestones.relief_boss_kills || 0) + 1;
					}
					break;
			}
			checkAchievementCompleted();			
		}
	}
	
	projectilePlayerShipCollision(obj1, obj2)
	{
		//obj1 = projectile //obj2 = player ship
		if(obj1.from == 'enemy'  && !obj1.hasHit)
		{
			obj1.hasHit = true;

			if(this.player_ships[obj2.index] == null)
				return;
			
			obj1.explosion = this.add.image(obj1.x, obj1.y, 'enemy-' + obj1.sprite);
			obj1.explosion.setDepth(3);
			if(obj1.custom_tint != null)
				obj1.explosion.tint = obj1.custom_tint;
			obj1.explosion.scale = 0;
			this.tweens.add({
				targets: obj1.explosion,
				scale: { value: 0.5, duration: 150, ease: 'easeIn' },
				alpha: { value: 0, duration: 200, ease: 'easeInOut' },
				onComplete: function(tween, targets){
					targets[0].destroy();
				}
			});
			
			obj1.setVisible(false);
			obj2.hit(obj1.damage);
		}
	}
	
	newLevelAnimation()
	{
		NEW_LEVEL_ANIMATION = true;
		$(this.player_ships).each(function(index, ship){
			ship.health_bar.updatePositionY(-this.displayHeight);
			this.scene.tweens.add({
				targets: ship,
				alpha: {value: 0, duration: 500, ease: 'Power1', delay: 1000},
				y: {value: -this.displayHeight, duration: 1500, ease: 'Quad.easeInOut'},
				repeat: 0,
				onComplete: function(tween, targets){
					IS_PLAYING = true;
					targets[0].resetHP();
					targets[0].startTimers();
				}
			});
		});

		if(player.level == (stories[player.current_story].missions[player.current_mission].required_level + 1) && stories[player.current_story].missions[player.current_mission].type == 'standard')
		{
			$('.mission-level-reached').center().fadeIn(500);
			send_push_notification('Mission completed', 'You have completed the mission ' + stories[player.current_story].missions[player.current_mission].name);
		}
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
