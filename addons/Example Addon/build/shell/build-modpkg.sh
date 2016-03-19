cd /Users/Desno365/Documents/Projects/MinecraftMods/DesnoGuns-Mod/DesnoGuns-Mod/addons/Example\ Addon
find . -name '*.DS_Store' -type f -delete
rm build/Example_addon_for_developers_r000.modpkg
zip -rq build/Example_addon_for_developers_r000.modpkg images
zip -rq build/Example_addon_for_developers_r000.modpkg script
zip -rq build/Example_addon_for_developers_r000.modpkg my-addon-name-sounds