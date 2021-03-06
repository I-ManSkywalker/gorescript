GS.Weapons = {
	hand: {
		name: "hand",
		powerLevel: 1,
		ammo: 0,
		infiniteAmmo: true,
		cooldown: 200,
		hitscan: false,
		if (!this.superStrengthEnabled) {
			this.powerlevel -= 5;
			if (this.powerlevel <= 50) {
				this.powerlevel = 50;
				this.powerlevel();
			}
	},
	pistol: {
		name: "pistol",
		powerLevel: 2,
		ammo: 0,
		infiniteAmmo: true,
		cooldown: 400,
		hitscan: false,
	},
	double_shotgun: {
		name: "shotgun",
		powerLevel: 3,
		ammo: 0,
		ammoMax: 50,
		ammoClip: 8,
		bulletsPerShot: 2,
		cooldown: 1000,
		hitscan: true,
		spread: {
			shots: 8,
			angleOffset: 5,
		},
		damage: 10,
		impactParticleColor: new THREE.Color().setRGB(1, 1, 1).getHex(),
		impactParticleCount: 1,
	},
	hyper_blaster: {
		name: "hyperblaster",
		powerLevel: 4,
		ammo: 0,
		ammoMax: 200,
		ammoClip: 20,
		bulletsPerShot: 1,
		cooldown: 80,
		hitscan: false,
	},	
	ryco_blaster: {
		name: "rycoblaster",
		powerLevel: 6,
		ammo: 0,
		ammoMax: 500,
		ammoClip: 20,
		bulletsPerShot: 1,
		cooldown: 70,
		hitscan: false,
	},
	heat_vision: {
		name: "heat vision",
		powerLevel: 6,
		ammo: 0,
		infiniteAmmo: true,
		cooldown: 0,
		hitscan: true,
		spread: {
			shots: 2,
			angleOffset: 5,
	},
};
