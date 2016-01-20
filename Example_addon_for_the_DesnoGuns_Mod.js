// example addon for the DesnoGuns Mod

var ADDON_NAME = "Example Addon";

var ADDON_DESCRIPTION = "More and more guns example addon by Desno365. WOW.";

var ADDON_WEAPONS = [

	{
		weaponType: "gun",
		name: "Custom .44 Magnum",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3500,
		fireRate: 4,
		recoil: 20,
		bulletSpeed: 9.9 /* one shot one kill, yeah */ ,
		accuracy: 6,
		zoomLevel: 13,
		texture: "44magnum",
		ammo: 6,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "44Magnum.mp3",
		reloadSound: "GL6Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom AK47",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3501,
		fireRate: 3,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 5,
		zoomLevel: 23,
		texture: "ak47",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "AK47Shoot.ogg",
		reloadSound: "MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom AK74",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3502,
		fireRate: 3,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 23,
		texture: "ak74",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "AK74Shoot.ogg",
		reloadSound: "MP40Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom AT4",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3503,
		fireRate: 10,
		recoil: 10,
		bulletSpeed: 3.9,
		accuracy: 5,
		zoomLevel: 12,
		texture: "at4",
		ammo: 1,
		smoke: 4,
		// BEHAVIOR
		shotType: "normal",
		hasParticleTrail: true,
		particleTrailDistance: 3,
		particleTrailId: 4,
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 4,
		// SOUNDS
		sound: "AT4_and_M72LAW_and_Panzerfaust3Shoot.ogg",
		reloadSound: "BazookaReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom AUG",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3504,
		fireRate: 3,
		recoil: 2.5,
		bulletSpeed: 6.8,
		accuracy: 3,
		zoomLevel: 23,
		texture: "aug",
		ammo: 42,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "FNSCAR_and_AUG_and_MTARShoot.ogg",
		reloadSound: "MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Barrett Explosive",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3505,
		fireRate: 12,
		recoil: 25,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 3,
		hasAimImageLayer: true,
		texture: "barrettexplosive",
		ammo: 10,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 2,
		// SOUNDS
		sound: "BarrettShoot.ogg",
		reloadSound: "BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Barrett",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3506,
		fireRate: 12,
		recoil: 25,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "barrett",
		ammo: 10,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "BarrettShoot.ogg",
		reloadSound: "BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Bizon",
		gunType: "sub_machine",
		buttonType: "on_touch",
		id: 3507,
		fireRate: 2,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 3,
		zoomLevel: 18,
		texture: "bizon",
		ammo: 53,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		reloadSound: "MP40Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Crossbow Explosive",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3508,
		fireRate: 14,
		recoil: 11,
		bulletSpeed: 5.9,
		zoomLevel: 23,
		accuracy: 5,
		hasAimImageLayer: true,
		texture: "crossbowexplosive",
		ammo: 1,
		ammunitionID: 3349 /* ammo arrow explosive */,
		smoke: 0,
		recipeShape: [
			" is",
			"ers",
			" is"],
		recipeDescription: ["i", 265, 0, "r", 331, 0, "s", 287 /*string*/, 0, "e", 3349 /* ammo arrow explosive */, 0],
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal_explosive_on_time",
		bulletsExplosionDelay: 3350,
		bulletsExplosionRadius: 4,
		// SOUNDS
		sound: "CrossbowShoot.wav",
		reloadSound: "CrossbowReload.wav",
	},

	{
		weaponType: "gun",
		name: "Custom Crossbow",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3509,
		fireRate: 14,
		recoil: 11,
		bulletSpeed: 5.9,
		zoomLevel: 23,
		accuracy: 5,
		hasAimImageLayer: true,
		texture: "crossbow",
		ammo: 1,
		ammunitionID: 262, // 262 = arrow
		smoke: 0,
		recipeShape: [
			" is",
			"ars",
			" is"],
		recipeDescription: ["i", 265, 0, "r", 331, 0, "s", 287 /*string*/, 0, "a", 262 /*arrow*/, 0],
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "CrossbowShoot.wav",
		reloadSound: "CrossbowReload.wav",
	},

	{
		weaponType: "gun",
		name: "Custom Desert Eagle",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3510,
		fireRate: 1,
		recoil: 4,
		bulletSpeed: 5.1,
		accuracy: 6,
		zoomLevel: 13,
		texture: "deserteagle",
		ammo: 7,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "DesertEagleShoot.ogg",
		reloadSound: "LugerReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Desert Eagle Gold",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3511,
		fireRate: 1,
		recoil: 4,
		bulletSpeed: 5.1,
		accuracy: 5,
		zoomLevel: 13,
		texture: "deserteaglegold",
		ammo: 7,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "DesertEagleShoot.ogg",
		reloadSound: "LugerReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Dragunov",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3512,
		fireRate: 8,
		recoil: 23,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "dragunov",
		ammo: 10,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "DragunovShoot.ogg",
		reloadSound: "BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Flamethrower",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3513,
		fireRate: 1,
		recoil: 0.5,
		accuracy: 5.5,
		zoomLevel: 10,
		texture: "flamethrower",
		ammo: 750,
		smoke: 3,
		// BEHAVIOR
		shotType: "flamethrower",
		// SOUNDS
		hasRandomWarmupSound: true,
		warmupSound: {
			startingFrom: 1,
			endingAt: 3,
			startText: "ignite_flamethrower",
			endText: ".ogg"
		},
		hasntShootingSound: true,
		spinSound: "flamethrower.mp3",
		hasntCooldownSound: true,
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom FNSCAR",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3514,
		fireRate: 3,
		recoil: 1.5,
		bulletSpeed: 5.9,
		accuracy: 3,
		zoomLevel: 23,
		texture: "fnscar",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "FNSCAR_and_AUG_and_MTARShoot.ogg",
		reloadSound: "MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom G3",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3515,
		fireRate: 2,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 23,
		texture: "g3",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		reloadSound: "ThompsonReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom G36",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3516,
		fireRate: 3,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 23,
		texture: "g36",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "G36Shoot.ogg",
		reloadSound: "MP40Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom GL1",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3517,
		fireRate: 10,
		recoil: 12,
		bulletSpeed: 2.4,
		accuracy: 10,
		zoomLevel: 10,
		texture: "gl1",
		ammo: 1,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "tnt",
		// SOUNDS
		sound: "GrenadeLauncherShoot.ogg",
		reloadSound: "GrenadeLauncherReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom GL6",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3518,
		fireRate: 1,
		recoil: 8,
		bulletSpeed: 2.4,
		accuracy: 15,
		zoomLevel: 10,
		texture: "gl6",
		ammo: 6,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "tnt",
		// SOUNDS
		sound: "GrenadeLauncherShoot.ogg",
		reloadSound: "GL6Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Glock",
		gunType: "machine_pistol",
		buttonType: "on_touch",
		id: 3519,
		fireRate: 3,
		recoil: 2,
		bulletSpeed: 5.1,
		accuracy: 2.5,
		zoomLevel: 13,
		texture: "glock",
		ammo: 31,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "GlockShoot.ogg",
		reloadSound: "ColtReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom L86",
		gunType: "light_machine",
		buttonType: "on_touch",
		id: 3520,
		fireRate: 3,
		recoil: 5,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 18,
		texture: "l86",
		ammo: 100,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "M249_and_L86Shoot.ogg",
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom L96",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3521,
		fireRate: 26,
		recoil: 14,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "l96",
		ammo: 10,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "L96Shoot.ogg",
		reloadSound: "BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M9",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3522,
		fireRate: 1,
		recoil: 1,
		bulletSpeed: 5.1,
		accuracy: 8,
		zoomLevel: 13,
		texture: "m9",
		ammo: 15,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "M9Shoot.ogg",
		reloadSound: "ColtReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M14",
		gunType: "assault_rifle",
		buttonType: "on_click",
		id: 3523,
		fireRate: 1,
		recoil: 4,
		bulletSpeed: 5.9,
		zoomLevel: 23,
		accuracy: 2,
		texture: "m14",
		ammo: 20,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "M14_and_M16A4Shoot.ogg",
		reloadSound: "BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M16A4",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3524,
		fireRate: 3,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 23,
		texture: "m16a4",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "M14_and_M16A4Shoot.ogg",
		reloadSound: "MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M21",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3525,
		fireRate: 10,
		recoil: 18,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "m21",
		ammo: 10,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "M21Shoot.ogg",
		reloadSound: "BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M40A3 Ice",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3526,
		fireRate: 10,
		recoil: 23,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "m40a3ice",
		ammo: 5,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "R700_and_M40A3Shoot.ogg",
		reloadSound: "SpringfieldReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M40A3",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3527,
		fireRate: 10,
		recoil: 23,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "m40a3",
		ammo: 5,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "R700_and_M40A3Shoot.ogg",
		reloadSound: "SpringfieldReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M60E4",
		gunType: "light_machine",
		buttonType: "on_touch",
		id: 3528,
		fireRate: 3,
		recoil: 6,
		bulletSpeed: 5.9,
		accuracy: 3.5,
		zoomLevel: 18,
		texture: "m60e4",
		ammo: 100,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "RPD_and_M60E4_and_RPKShoot.ogg",
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M72LAW",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3529,
		fireRate: 10,
		recoil: 13,
		bulletSpeed: 3.9,
		accuracy: 5,
		zoomLevel: 12,
		texture: "m72law",
		ammo: 1,
		smoke: 4,
		// BEHAVIOR
		shotType: "normal",
		hasParticleTrail: true,
		particleTrailDistance: 3,
		particleTrailId: 4,
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 4,
		// SOUNDS
		sound: "AT4_and_M72LAW_and_Panzerfaust3Shoot.ogg",
		reloadSound: "BazookaReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M249",
		gunType: "light_machine",
		buttonType: "on_touch",
		id: 3530,
		fireRate: 3,
		recoil: 6,
		bulletSpeed: 5.9,
		accuracy: 3.5,
		zoomLevel: 18,
		texture: "m249",
		ammo: 100,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "M249_and_L86Shoot.ogg",
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M1014",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3531,
		fireRate: 18,
		recoil: 10,
		bulletSpeed: 3.9,
		accuracy: 12,
		zoomLevel: 15,
		texture: "m1014",
		ammo: 4,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 8,
		shotgunDegreesSpread: 3,
		bulletType: "normal",
		// SOUNDS
		sound: "M1014Shoot.ogg",
		reloadSound: "M1014Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Model 1887",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3532,
		fireRate: 20,
		recoil: 18,
		bulletSpeed: 3.9,
		accuracy: 15,
		zoomLevel: 15,
		texture: "m1887",
		ammo: 5,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 8,
		shotgunDegreesSpread: 5,
		bulletType: "normal",
		// SOUNDS
		sound: "M1887Shoot.ogg",
		reloadSound: "M1887Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Makarov",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3533,
		fireRate: 1,
		recoil: 2.5,
		bulletSpeed: 5.1,
		accuracy: 8,
		zoomLevel: 13,
		texture: "makarov",
		ammo: 8,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "MakarovShoot.ogg",
		reloadSound: "ColtReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Minigun Explosive",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3534,
		fireRate: 3,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 5.5,
		zoomLevel: 23,
		texture: "minigunexplosive",
		ammo: 250,
		smoke: 3,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 2,
		// SOUNDS
		warmupSound: "MinigunWarmup.ogg",
		sound: "P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		spinSound: "MinigunSpin.ogg",
		cooldownSound: "MinigunCooldown.ogg",
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Minigun",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3535,
		fireRate: 1,
		recoil: 1,
		bulletSpeed: 5.9,
		accuracy: 5.5,
		zoomLevel: 23,
		texture: "minigun",
		ammo: 500,
		smoke: 3,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		warmupSound: "MinigunWarmup.ogg",
		sound: "P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		spinSound: "MinigunSpin.ogg",
		cooldownSound: "MinigunCooldown.ogg",
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Mini-Uzi",
		gunType: "machine_pistol",
		buttonType: "on_touch",
		id: 3536,
		fireRate: 2,
		recoil: 3,
		bulletSpeed: 5.1,
		accuracy: 2.5,
		zoomLevel: 13,
		texture: "miniuzi",
		ammo: 32,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "MiniUziShoot.ogg",
		reloadSound: "ColtReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom MP5",
		gunType: "sub_machine",
		buttonType: "on_touch",
		id: 3537,
		fireRate: 3,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 18,
		texture: "mp5",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "MP5Shoot.ogg",
		reloadSound: "StenReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom MTAR",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3538,
		fireRate: 3,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 3,
		zoomLevel: 23,
		texture: "mtar",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "FNSCAR_and_AUG_and_MTARShoot.ogg",
		reloadSound: "MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Multiple Rocket Launcher",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3539,
		fireRate: 10,
		recoil: 22,
		bulletSpeed: 3.9 - 0.3,
		accuracy: 5,
		zoomLevel: 12,
		texture: "multiplerocketlauncher",
		ammo: 1,
		smoke: 4,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 4,
		shotgunDegreesSpread: 8,
		shotgunWait: 20,
		hasParticleTrail: true,
		particleTrailDistance: 3,
		particleTrailId: 4,
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 2,
		// SOUNDS
		sound: "MultipleRocketLauncherShoot.mp3",
		reloadSound: "BazookaReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom P90",
		gunType: "sub_machine",
		buttonType: "on_touch",
		id: 3540,
		fireRate: 2,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 18,
		texture: "p90",
		ammo: 50,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		reloadSound: "DP28Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom R700",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3541,
		fireRate: 20,
		recoil: 25,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "r700",
		ammo: 4,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "R700_and_M40A3Shoot.ogg",
		reloadSound: "SpringfieldReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Remington 870",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3542,
		fireRate: 15,
		recoil: 19,
		bulletSpeed: 3.9,
		accuracy: 11,
		zoomLevel: 15,
		texture: "r870",
		ammo: 7,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 8,
		shotgunDegreesSpread: 3,
		bulletType: "normal",
		// SOUNDS
		sound: "R870Shoot.ogg",
		reloadSound: "W1200Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom RPD",
		gunType: "light_machine",
		buttonType: "on_touch",
		id: 3543,
		fireRate: 3,
		recoil: 5.5,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 18,
		texture: "rpd",
		ammo: 100,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "RPD_and_M60E4_and_RPKShoot.ogg",
		reloadSound: "MG42Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom RPG",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3544,
		fireRate: 10,
		recoil: 25,
		bulletSpeed: 3.9,
		accuracy: 10,
		zoomLevel: 12,
		texture: "rpg",
		ammo: 1,
		smoke: 4,
		// BEHAVIOR
		shotType: "normal",
		hasParticleTrail: true,
		particleTrailDistance: 3,
		particleTrailId: 4,
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 4,
		// SOUNDS
		sound: "RPGShoot.ogg",
		reloadSound: "BazookaReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom RPK",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3545,
		fireRate: 3,
		recoil: 3.5,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 23,
		texture: "rpk",
		ammo: 40,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "RPD_and_M60E4_and_RPKShoot.ogg",
		reloadSound: "MG42Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom SG550",
		gunType: "assault_rifle",
		buttonType: "on_click",
		id: 3546,
		fireRate: 5,
		recoil: 2.5,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 23,
		texture: "sg550",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "SG550Shoot.ogg",
		reloadSound: "MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom SIGP226",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3547,
		fireRate: 1,
		recoil: 3,
		bulletSpeed: 5.1,
		accuracy: 6,
		zoomLevel: 13,
		texture: "sigp226",
		ammo: 10,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "SIGP226Shoot.ogg",
		reloadSound: "LugerReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Skorpion",
		gunType: "machine_pistol",
		buttonType: "on_touch",
		id: 3548,
		fireRate: 3,
		recoil: 1.5,
		bulletSpeed: 5.1,
		accuracy: 2.5,
		zoomLevel: 13,
		texture: "skorpion",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "SkorpionShoot.ogg",
		reloadSound: "StenReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom SPAS-12",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3549,
		fireRate: 15,
		recoil: 22,
		bulletSpeed: 3.9,
		accuracy: 11,
		zoomLevel: 15,
		texture: "spas",
		ammo: 7,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 7,
		shotgunDegreesSpread: 2,
		bulletType: "normal",
		// SOUNDS
		sound: "W1200_and_SPASShoot.ogg",
		reloadSound: "W1200Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom USP",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3550,
		fireRate: 1,
		recoil: 1,
		bulletSpeed: 5.1,
		accuracy: 8,
		zoomLevel: 13,
		texture: "usp",
		ammo: 10,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "USPShoot.ogg",
		reloadSound: "TT33Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom W1200",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3551,
		fireRate: 15,
		recoil: 17,
		bulletSpeed: 3.9,
		accuracy: 11,
		zoomLevel: 15,
		texture: "w1200",
		ammo: 7,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 8,
		shotgunDegreesSpread: 3,
		bulletType: "normal",
		// SOUNDS
		sound: "W1200_and_SPASShoot.ogg",
		reloadSound: "W1200Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom X-Mas Minigun",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3552,
		fireRate: 2,
		recoil: 1,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 23,
		texture: "xmasminigun",
		ammo: 500,
		smoke: 3,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "snowball",
		// SOUNDS
		warmupSound: "MinigunWarmup.ogg",
		sound: "bell.mp3",
		spinSound: "MinigunSpin.ogg",
		cooldownSound: "MinigunCooldown.ogg",
		reloadSound: "BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom X-Mas Sniper",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3553,
		fireRate: 5,
		recoil: 5,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "xmassniper",
		ammo: 5,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "snowball",
		// SOUNDS
		sound: "bell.mp3",
		reloadSound: "SpringfieldReload.ogg",
	},
];


/*
	// REFERENCE
	{
		// all possible variables for a gun
		weaponType: "gun", // must be gun
		name: string, // the name of the gun.
		gunType: string, // the type of the gun, can be "assault_rifle", "sub_machine", "light_machine", "sniper_rifle", "shotgun", "machine_pistol", "handgun", "launcher" and "minigun".
		buttonType: string, // how the mod manages the click of the "fire" button, can be "on_click": the gun shoot every time you click; "on_touch": when you click the "fire" button the gun continues to shoot until you release it; "on_touch_with_wait": it's a special on_touch type, it is like on_touch but the gun needs some time to load before shooting.
		id: int, // the unique id of the gun, must be a number > 512 and < 4096.
		fireRate: int, // an integer number > or = 1, it represents how many ticks (1/20 of a seconds) the gun has to wait before shooting another bullet.
		recoil: float, // a number > 0, the higher this number is the more recoil the gun will have.
		bulletSpeed: float, // a number > 0, this is the speed of the bullet. P.S.: this is not necessary with a flamethrower.
		accuracy: int, // a number > 0 and < 45, the higher this number is the less accuracy the gun will have.
		zoomLevel: int, // an integer number > 0 and < 68, the higher this number is the more zoom the gun will have when aiming.
		hasAimImageLayer: boolean, // show image when aiming, usually sniper rifles has this image.
		texture: String, // the name of the texture this gun uses.
		textureNumber: int, // the texture number of the texture, if you are using a custom texture you can delete this variable since this variable is only useful when using textures already present in Minecraft.
		ammo: int, // an integer number > 0, it represents the number of bullets in the ammo.
		ammunitionID: int, // here you can set a custom id for the ammunition used when reloading the gun. If you delete this variable the mod will use the default ammunition id of the gunType.
		smoke: int, // number of particles spawned after the gun has stopped shooting, if 0 can be deleted
		recipeShape: TODO, //  *! advanced variable, only for experts, if you don't understand what it does just delete it !*
		recipeDescription: TODO //  *! advanced variable, only for experts, if you don't understand what it does just delete it !*

		// BEHAVIOR
		shotType: string, // can be "normal", "shotgun", "flamethrower"
		bulletType: string, // can be "normal", "normal_explosive_on_touch", "normal_explosive_on_time", "tnt", "snowball", "custom". This can be changed only with "normal" or "shotgun" types, not with flamethrower.
		customBulletId: int, //  *! advanced variable, only for experts, if you don't understand what it does just delete it !* entity id of the bullet that can be used with bulletType "custom"

		// options with shotType = "normal" or "shotgun"
		hasParticleTrail: boolean, // display a trail of particles behind the bullet
		particleTrailDistance: int, // the higher this number is the less distance particles will have between them and the player
		particleTrailId: int, // the id

		// options with shotType = "shotgun"
		shotgunBullets: int, // number of bullets the gun will shoot. Must be > or = 0 when using shotType "shotgun".
		shotgunDegreesSpread: float, // represents the width of the shotgun cone in degrees (it basically acts like an accuracy). Must be > or = 0 when using shotType "shotgun".
		shotgunWait: int, // *! advanced variable, only for experts, if you don't understand what it does just delete it !* it represents the number of milliseconds to wait before shooting the next bullet of the shotgun. If you want the shotgun bullets to be shot all at the same time just delete this variable

		// options with bulletType = "normal_explosive_on_time"
		bulletsExplosionDelay: int, // the milliseconds of delay before exploding
		bulletsExplosionRadius: int, // the radius of the explosion

		// options with bulletType = "normal_explosive_on_touch"
		bulletsExplosionRadius: int, // the radius of the explosion

		// SOUNDS
		hasntShootingSound: boolean,
		sound: String, // sound when shooting
		reloadSound: String, // sound when reloading

		// SOUNDS only for type "on_touch"_WITH_WAIT
		hasRandomWarmupSound: boolean, // true if there are multiple possible warm-up sounds
		warmupSound: { // this form must be used only if hasRandomWarmupSound false, this random structure creates a string like this startText + number + endText
			startingFrom: int,
			endingAt: int,
			startText: String,
			endText: String
		},
		warmupSound: String,
		spinSound: String,
		hasntCooldownSound: boolean,
		cooldownSound: String,
	}
*/


// Don't delete or modify this function! It is called by the DesnoGuns Mod to load all your guns.
function loadWeaponsHook() { var arrobject = [ADDON_WEAPONS, ADDON_NAME, ADDON_DESCRIPTION]; net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("loadWeaponsCallback", arrobject); }

