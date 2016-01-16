// example addon for the DesnoGuns Mod

var ADDON_NAME = "Example Addon";

var ADDON_DESCRIPTION = "More and more guns example addon by Desno365. WOW.";

var ADDON_WEAPONS = [

	{
		weaponType: "gun",
		name: "Custom .44 Magnum",
		gunType: "handgun",
		buttonType: "on_click",
		id: 4000,
		fireRate: 4,
		recoil: 20,
		bulletSpeed: 9.9,
		accuracy: 6,
		zoomLevel: 13,
		sound: "44Magnum.mp3",
		reloadSound: "GL6Reload.ogg",
		texture: "44magnum",
		ammo: 6,
		smoke: 1,
	},

	{
		weaponType: "gun",
		name: "Custom AK47",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 4001,
		fireRate: 3,
		recoil: 3,
		bulletSpeed: 5.9,
		accuracy: 5,
		zoomLevel: 23,
		sound: "AK47Shoot.ogg",
		reloadSound: "MP44Reload.ogg",
		texture: "ak47",
		ammo: 30,
		smoke: 1,
	},
];


/*
	// REFERENCE
	{
		// all possible variables for a gun
		weaponType: "gun", // must be gun
		name: string, // the name of the gun.
		gunType: string, // the type of the gun, can be... TODO
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
		shotType: string,
		bulletType: string, // only with normal or shotgun types, not with flamethrower
		customBulletId: int, //  *! advanced variable, only for experts, if you don't understand what it does just delete it !* entity id of the bullet

		// options with shotType = "normal" or "shotgun"
		hasParticleTrail: boolean, // display a trail of particles behind the bullet
		particleTrailDistance: int, // the higher this number is the less distance particles will have between them and the player
		particleTrailId: int, // the id

		// options with shotType = "shotgun"
		shotgunBullets: int, // number of bullets the gun will shoot
		shotgunDegreesSpread: float, // represents the width of the shotgun cone in degrees (it basically acts like an accuracy). Must be > or = 0.
		shotgunWait: int, // *! advanced variable, only for experts, if you don't understand what it does just delete it !* it represents the number of milliseconds to wait before shooting the next bullet of the shotgun. If you want the shotgun bullets to be shot all at the same time just delete this variable

		// options with bulletType = "normal_explosive_on_time"
		bulletsExplosionDelay: int, // the milliseconds of delay before exploding
		bulletsExplosionRadius: int, // the radius of the explosion

		// options with bulletType = "normal_explosive_on_touch"
		bulletsExplosionRadius: int, // the radius of the explosion
		hasExplosiveBulletsSmokeTrail: boolean, // when true these bullets will have a smoke trail behind them

		// SOUNDS
		hasntShootingSound: boolean,
		sound: String, // sound when shooting
		reloadSound: String, // sound when reloading

		// SOUNDS only for type BUTTON_TYPE_ON_TOUCH_WITH_WAIT
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

