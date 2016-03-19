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
		texture: "custom_44magnum",
		ammo: 6,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/44Magnum.mp3",
		reloadSound: "custom/my-addon-name-sounds/reload/GL6Reload.ogg",
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
		texture: "custom_ak47",
		ammo: 30,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/AK47Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Barrett Explosive",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3502,
		fireRate: 12,
		recoil: 25,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 3,
		hasAimImageLayer: true,
		texture: "custom_barrettexplosive",
		ammo: 10,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 2,
		// SOUNDS
		sound: "custom/my-addon-name-sounds/BarrettShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Barrett",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3503,
		fireRate: 12,
		recoil: 25,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "custom_barrett",
		ammo: 10,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/BarrettShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Bizon",
		gunType: "sub_machine",
		buttonType: "on_touch",
		id: 3504,
		fireRate: 2,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 3,
		zoomLevel: 18,
		texture: "custom_bizon",
		ammo: 53,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/MP40Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Crossbow Explosive",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3505,
		fireRate: 14,
		recoil: 11,
		bulletSpeed: 5.9,
		zoomLevel: 23,
		accuracy: 5,
		hasAimImageLayer: true,
		texture: "custom_crossbowexplosive",
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
		sound: "custom/my-addon-name-sounds/CrossbowShoot.wav",
		reloadSound: "custom/my-addon-name-sounds/reload/CrossbowReload.wav",
	},

	{
		weaponType: "gun",
		name: "Custom Crossbow",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3506,
		fireRate: 14,
		recoil: 11,
		bulletSpeed: 5.9,
		zoomLevel: 23,
		accuracy: 5,
		hasAimImageLayer: true,
		texture: "custom_crossbow",
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
		sound: "custom/my-addon-name-sounds/CrossbowShoot.wav",
		reloadSound: "custom/my-addon-name-sounds/reload/CrossbowReload.wav",
	},

	{
		weaponType: "gun",
		name: "Custom Flamethrower",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3507,
		fireRate: 1,
		recoil: 0.5,
		accuracy: 5.5,
		zoomLevel: 10,
		texture: "custom_flamethrower",
		ammo: 750,
		smoke: 3,
		// BEHAVIOR
		shotType: "flamethrower",
		// SOUNDS
		warmupSound: "custom/my-addon-name-sounds/ignite_flamethrower1.ogg",
		hasntShootingSound: true,
		spinSound: "custom/my-addon-name-sounds/flamethrower.mp3",
		hasntCooldownSound: true,
		reloadSound: "custom/my-addon-name-sounds/reload/BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom G3",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 3508,
		fireRate: 2,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 23,
		texture: "custom_g3",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/ThompsonReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom GL1",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3509,
		fireRate: 10,
		recoil: 12,
		bulletSpeed: 2.4,
		accuracy: 10,
		zoomLevel: 10,
		texture: "custom_gl1",
		ammo: 1,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "tnt",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/GrenadeLauncherShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/GrenadeLauncherReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom GL6",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3510,
		fireRate: 1,
		recoil: 8,
		bulletSpeed: 2.4,
		accuracy: 15,
		zoomLevel: 10,
		texture: "custom_gl6",
		ammo: 6,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "tnt",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/GrenadeLauncherShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/GL6Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Glock",
		gunType: "machine_pistol",
		buttonType: "on_touch",
		id: 3511,
		fireRate: 3,
		recoil: 2,
		bulletSpeed: 5.1,
		accuracy: 2.5,
		zoomLevel: 13,
		texture: "custom_glock",
		ammo: 31,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/GlockShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/ColtReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom L86",
		gunType: "light_machine",
		buttonType: "on_touch",
		id: 3512,
		fireRate: 3,
		recoil: 5,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 18,
		texture: "custom_l86",
		ammo: 100,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/M249_and_L86Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M14",
		gunType: "assault_rifle",
		buttonType: "on_click",
		id: 3513,
		fireRate: 1,
		recoil: 4,
		bulletSpeed: 5.9,
		zoomLevel: 23,
		accuracy: 2,
		texture: "custom_m14",
		ammo: 20,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/M14_and_M16A4Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BARReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M72LAW",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3514,
		fireRate: 10,
		recoil: 13,
		bulletSpeed: 3.9,
		accuracy: 5,
		zoomLevel: 12,
		texture: "custom_m72law",
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
		sound: "custom/my-addon-name-sounds/AT4_and_M72LAW_and_Panzerfaust3Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BazookaReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Custom M249",
		gunType: "light_machine",
		buttonType: "on_touch",
		id: 3515,
		fireRate: 3,
		recoil: 6,
		bulletSpeed: 5.9,
		accuracy: 3.5,
		zoomLevel: 18,
		texture: "custom_m249",
		ammo: 100,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/M249_and_L86Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom M1014",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3516,
		fireRate: 18,
		recoil: 10,
		bulletSpeed: 3.9,
		accuracy: 12,
		zoomLevel: 15,
		texture: "custom_m1014",
		ammo: 4,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 8,
		shotgunDegreesSpread: 3,
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/M1014Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/M1014Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Model 1887",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3517,
		fireRate: 20,
		recoil: 18,
		bulletSpeed: 3.9,
		accuracy: 15,
		zoomLevel: 15,
		texture: "custom_m1887",
		ammo: 5,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 8,
		shotgunDegreesSpread: 5,
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/M1887Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/M1887Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Minigun Explosive",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3518,
		fireRate: 3,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 5.5,
		zoomLevel: 23,
		texture: "custom_minigunexplosive",
		ammo: 250,
		smoke: 3,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 2,
		// SOUNDS
		warmupSound: "custom/my-addon-name-sounds/MinigunWarmup.ogg",
		sound: "custom/my-addon-name-sounds/P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		spinSound: "custom/my-addon-name-sounds/MinigunSpin.ogg",
		cooldownSound: "custom/my-addon-name-sounds/MinigunCooldown.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Minigun",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3519,
		fireRate: 1,
		recoil: 1,
		bulletSpeed: 5.9,
		accuracy: 5.5,
		zoomLevel: 23,
		texture: "custom_minigun",
		ammo: 500,
		smoke: 3,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		warmupSound: "custom/my-addon-name-sounds/MinigunWarmup.ogg",
		sound: "custom/my-addon-name-sounds/P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		spinSound: "custom/my-addon-name-sounds/MinigunSpin.ogg",
		cooldownSound: "custom/my-addon-name-sounds/MinigunCooldown.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Multiple Rocket Launcher",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3520,
		fireRate: 10,
		recoil: 22,
		bulletSpeed: 3.9 - 0.3,
		accuracy: 5,
		zoomLevel: 12,
		texture: "custom_multiplerocketlauncher",
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
		sound: "custom/my-addon-name-sounds/MultipleRocketLauncherShoot.mp3",
		reloadSound: "custom/my-addon-name-sounds/reload/BazookaReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Custom P90",
		gunType: "sub_machine",
		buttonType: "on_touch",
		id: 3521,
		fireRate: 2,
		recoil: 2,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 18,
		texture: "custom_p90",
		ammo: 50,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/P90_and_Bizon_and_G3Shoot_and_Minigun.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/DP28Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom R700",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3522,
		fireRate: 20,
		recoil: 25,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "custom_r700",
		ammo: 4,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/R700_and_M40A3Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/SpringfieldReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom Ray Gun",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3523,
		fireRate: 5,
		recoil: 12,
		bulletSpeed: 5.9,
		accuracy: 2,
		zoomLevel: 13,
		texture: "custom_raygun",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 2, // with double tap
		shotgunDegreesSpread: 0.5,
		hasParticleTrail: true,
		particleTrailDistance: 9,
		particleTrailId: ParticleType.redstone,
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/RayGunShoot.mp3",
		reloadSound: "custom/my-addon-name-sounds/reload/RayGunReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Custom RPG",
		gunType: "launcher",
		buttonType: "on_click",
		id: 3524,
		fireRate: 10,
		recoil: 25,
		bulletSpeed: 3.9,
		accuracy: 10,
		zoomLevel: 12,
		texture: "custom_rpg",
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
		sound: "custom/my-addon-name-sounds/RPGShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BazookaReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Custom SG550",
		gunType: "assault_rifle",
		buttonType: "on_click",
		id: 3525,
		fireRate: 5,
		recoil: 2.5,
		bulletSpeed: 5.9,
		accuracy: 2.5,
		zoomLevel: 23,
		texture: "custom_sg550",
		ammo: 20,
		smoke: 1,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/SG550Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/MP44Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom SIGP226",
		gunType: "handgun",
		buttonType: "on_click",
		id: 3526,
		fireRate: 1,
		recoil: 3,
		bulletSpeed: 5.1,
		accuracy: 6,
		zoomLevel: 13,
		texture: "custom_sigp226",
		ammo: 10,
		smoke: 0,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/SIGP226Shoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/LugerReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom SPAS-12",
		gunType: "shotgun",
		buttonType: "on_click",
		id: 3527,
		fireRate: 15,
		recoil: 22,
		bulletSpeed: 3.9,
		accuracy: 11,
		zoomLevel: 15,
		texture: "custom_spas",
		ammo: 7,
		smoke: 1,
		// BEHAVIOR
		shotType: "shotgun",
		shotgunBullets: 7,
		shotgunDegreesSpread: 2,
		bulletType: "normal",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/W1200_and_SPASShoot.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/W1200Reload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom X-Mas Minigun",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 3528,
		fireRate: 2,
		recoil: 1,
		bulletSpeed: 5.9,
		accuracy: 4,
		zoomLevel: 23,
		texture: "custom_xmasminigun",
		ammo: 500,
		smoke: 3,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "snowball",
		// SOUNDS
		warmupSound: "custom/my-addon-name-sounds/MinigunWarmup.ogg",
		sound: "custom/my-addon-name-sounds/bell.mp3",
		spinSound: "custom/my-addon-name-sounds/MinigunSpin.ogg",
		cooldownSound: "custom/my-addon-name-sounds/MinigunCooldown.ogg",
		reloadSound: "custom/my-addon-name-sounds/reload/BrowningReload.ogg",
	},

	{
		weaponType: "gun",
		name: "Custom X-Mas Sniper",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 3529,
		fireRate: 5,
		recoil: 5,
		bulletSpeed: 9.9,
		zoomLevel: 40,
		accuracy: 2,
		hasAimImageLayer: true,
		texture: "custom_xmassniper",
		ammo: 5,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "snowball",
		// SOUNDS
		sound: "custom/my-addon-name-sounds/bell.mp3",
		reloadSound: "custom/my-addon-name-sounds/reload/SpringfieldReload.ogg",
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
		recipeShape: array, //  *! advanced variable, only for experts, if you don't understand what it does just delete it !*
		recipeDescription: array, //  *! advanced variable, only for experts, if you don't understand what it does just delete it !*

		// BEHAVIOR
		shotType: string, // can be "normal", "shotgun", "flamethrower"
		bulletType: string, // can be "normal", "normal_explosive_on_touch", "normal_explosive_on_time", "tnt", "snowball", "custom". This can be changed only with "normal" or "shotgun" types, not with flamethrower.
		customBulletId: int, //  *! advanced variable, only for experts, if you don't understand what it does just delete it !* entity id of the bullet that can be used with bulletType "custom"

		// options with shotType = "normal" or "shotgun"
		hasParticleTrail: boolean, // display a trail of particles behind the bullet
		particleTrailDistance: int, // the higher this number is the less distance particles will have between them and the player
		particleTrailId: int, // the id of the particle

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
		hasntShootingSound: boolean, // true if this gun doesn't make any sound when shooting
		sound: String, // sound when shooting
		reloadSound: String, // sound when reloading

		// SOUNDS only for type "on_touch_with_wait"
		warmupSound: String,
		spinSound: String,
		hasntCooldownSound: boolean,
		cooldownSound: String,
	}

	// Please don't delete this reference from your addon, it can be useful for other people.
*/


// Don't delete or modify this function! It is called by the DesnoGuns Mod to load all your guns.
function loadWeaponsHook() { var arrobject = [ADDON_WEAPONS, ADDON_NAME, ADDON_DESCRIPTION]; net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("loadWeaponsCallback", arrobject); }

