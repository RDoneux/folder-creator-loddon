cd ../;
mkdir application;
cd application;
mkdir backend;
cd ../folder-creator-loddon;
npm run package:win;
cd packages;
cp -r folder-creator-0.0.0-win32-x64 ../../application/"folder-creator";

cd ../../folder-creator-api/api;

./gradlew build;
./gradlew createExe;
cd ../../;
cp -r folder-creator-api/api/build/launch4j/api.exe application/backend/"api.exe";
cp -r folder-creator-api/api/build/launch4j/lib application/backend/"lib"
cp -r folder-creator-api/api/jdk-18.0.1.1 application/backend/"jdk-18.0.1.1";

cd application;

echo "start backend/api.exe; sleep 8; folder-creator/folder-creator-0.0.0.exe;" > start.sh;

$SHELL;