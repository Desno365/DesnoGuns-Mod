cd /Users/Desno365/Documents/Projects/MinecraftMods/DesnoGuns-Mod/DesnoGuns-Mod/modpkg
find . -name '*.DS_Store' -type f -delete
rm build/DesnoGuns_Mod_r000_Desno365.modpkg
zip -rq build/DesnoGuns_Mod_r000_Desno365.modpkg images
zip -rq build/DesnoGuns_Mod_r000_Desno365.modpkg inventory_plus
zip -rq build/DesnoGuns_Mod_r000_Desno365.modpkg script
zip -rq build/DesnoGuns_Mod_r000_Desno365.modpkg desnoguns-sounds
zip -rq build/DesnoGuns_Mod_r000_Desno365.modpkg README.txt