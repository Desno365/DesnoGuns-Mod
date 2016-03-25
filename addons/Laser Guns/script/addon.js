/* ******* Laser Guns Addon by Desno365 ******* */

//########################################################################################################################################################
// Addon code
//########################################################################################################################################################

var ADDON_NAME = "Laser Guns Addon";

var ADDON_DESCRIPTION = "Laser Guns Addon made by Desno365";

var ADDON_WEAPONS = [

	{
		weaponType: "gun",
		name: "Laser Gun",
		gunType: "assault_rifle",
		buttonType: "on_touch",
		id: 2427,
		fireRate: 3,
		recoil: 3,
		bulletSpeed: 6.8,
		accuracy: 2,
		zoomLevel: 23,
		texture: "laser_gun",
		ammo: 30,
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
		sound: "custom/laser-guns-sounds/RayGunShoot.mp3",
		reloadSound: "custom/laser-guns-sounds/reload/LaserGunReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Laser Bazooka",
		gunType: "launcher",
		buttonType: "on_click",
		id: 2428,
		fireRate: 6,
		recoil: 3,
		bulletSpeed: 4.5,
		accuracy: 6,
		zoomLevel: 12,
		texture: "laser_bazooka",
		ammo: 1,
		smoke: 2,
		// BEHAVIOR
		shotType: "normal",
		hasParticleTrail: true,
		particleTrailDistance: 9,
		particleTrailId: ParticleType.redstone,
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 5,
		// SOUNDS
		sound: "custom/laser-guns-sounds/LaserBazookaShoot.mp3",
		reloadSound: "custom/laser-guns-sounds/reload/LaserBazookaReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Laser Sniper Rifle",
		gunType: "sniper_rifle",
		buttonType: "on_click",
		id: 2429,
		fireRate: 18,
		recoil: 14,
		bulletSpeed: 9.9,
		accuracy: 2,
		zoomLevel: 40,
		hasAimImageLayer: true,
		texture: "laser_sniper_rifle",
		ammo: 6,
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
		sound: "custom/laser-guns-sounds/LaserSniperRifleShoot.mp3",
		reloadSound: "custom/laser-guns-sounds/reload/LaserSniperRifleReload.mp3",
	},

	{
		weaponType: "gun",
		name: "Laser Rail Gun",
		gunType: "minigun",
		buttonType: "on_touch_with_wait",
		id: 2430,
		fireRate: 1,
		recoil: 1.5,
		bulletSpeed: 4.5,
		accuracy: 7,
		zoomLevel: 23,
		texture: "laser_rail_gun",
		ammo: 250,
		smoke: 4,
		// BEHAVIOR
		shotType: "normal",
		bulletType: "normal_explosive_on_touch",
		bulletsExplosionRadius: 2,
		// SOUNDS
		warmupSound: "custom/laser-guns-sounds/LaserRailGunWarmup.mp3",
		sound: "custom/laser-guns-sounds/LaserRailGunShoot.mp3",
		spinSound: "custom/laser-guns-sounds/LaserRailGunSpin.mp3",
		cooldownSound: "custom/laser-guns-sounds/LaserRailGunCooldown.mp3",
		reloadSound: "custom/laser-guns-sounds/reload/LaserRailGunReload.mp3",
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


//########################################################################################################################################################
// Additional code, no addon
//########################################################################################################################################################

// updates variables
const CURRENT_VERSION = "r004";
var latestVersion;

//activity and other Android variables
var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//display size and density variables
var metrics = new android.util.DisplayMetrics();
currentActivity.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var deviceDensity = metrics.density;
metrics = null;

function newLevel()
{
	new java.lang.Thread(new java.lang.Runnable()
	{
		run: function()
		{
			updateLatestVersion();
			if(latestVersion != CURRENT_VERSION && latestVersion != undefined)
				updateAvailableUI();
		}
	}).start();
}

//############################################################################
// Added functions (No GUI and No render)
//############################################################################

function updateLatestVersion()
{
	try
	{
		// download content
		var url = new java.net.URL("https://raw.githubusercontent.com/Desno365/MCPE-scripts/master/laserMOD-version");
		var connection = url.openConnection();
 
		// get content
		inputStream = connection.getInputStream();
 
		// read result
		var loadedVersion = "";
		var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var rowVersion = "";
		while((rowVersion = bufferedVersionReader.readLine()) != null)
		{
			loadedVersion += rowVersion;
		}
		latestVersion = loadedVersion.split(" ")[0];
 
		// close what needs to be closed
		bufferedVersionReader.close();
		inputStream.close();
	} catch(err)
	{
		ModPE.log("updateLatestVersion(): caught an error: " + err);
	}
}

function convertDpToPixel(dp)
{
	//
	return Math.round(dp * deviceDensity);
}


//########################################################################################################################################################
// Utils of UI functions
//########################################################################################################################################################

const MARGIN_HORIZONTAL_BIG = 16;
const MARGIN_HORIZONTAL_SMALL = 4;

function setMarginsLinearLayout(view, left, top, right, bottom)
{
	var originalParams = view.getLayoutParams();
	var newParams = new android.widget.LinearLayout.LayoutParams(originalParams);
	newParams.setMargins(convertDpToPixel(left), convertDpToPixel(top), convertDpToPixel(right), convertDpToPixel(bottom));
	view.setLayoutParams(newParams);
}


//############################################################################
// UI functions
//############################################################################

function updateAvailableUI()
{
	currentActivity.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{
				var layout = new android.widget.LinearLayout(currentActivity);
				var padding = convertDpToPixel(8);
				layout.setPadding(padding, padding, padding, padding);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scroll = new android.widget.ScrollView(currentActivity);
				scroll.addView(layout);
			
				var popup = new android.app.Dialog(currentActivity); 
				popup.setContentView(scroll);
				popup.setTitle(new android.text.Html.fromHtml("Laser Guns Addon: new version"));
				
				var updateText = new android.widget.TextView(currentActivity);
				updateText.setText(new android.text.Html.fromHtml("New version available, you have the " + CURRENT_VERSION + " version and the latest version is " + latestVersion + ".<br>" +
					"You can find a download link on Desno365's website (press the button to visit it)."));
				layout.addView(updateText);
				setMarginsLinearLayout(updateText, 0, MARGIN_HORIZONTAL_SMALL, 0, MARGIN_HORIZONTAL_SMALL);

				var downloadButton = new android.widget.Button(currentActivity); 
				downloadButton.setText("Visit website"); 
				downloadButton.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						var intentBrowser = new android.content.Intent(currentActivity);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("http://desno365.net/minecraft/laser-mod/"));
						currentActivity.startActivity(intentBrowser);
						popup.dismiss();
					}
				});
				layout.addView(downloadButton);
				setMarginsLinearLayout(downloadButton, 0, MARGIN_HORIZONTAL_SMALL, 0, MARGIN_HORIZONTAL_BIG);
	
				var exitButton = new android.widget.Button(currentActivity); 
				exitButton.setText("Close"); 
				exitButton.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						popup.dismiss();
					}
				}); 
				layout.addView(exitButton);
				setMarginsLinearLayout(exitButton, 0, MARGIN_HORIZONTAL_SMALL, 0, MARGIN_HORIZONTAL_SMALL);
				

				popup.show();
			
			}catch(err)
			{
				clientMessage("Error: " + err);
			}
		}
	});
}

