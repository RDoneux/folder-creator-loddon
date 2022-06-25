::cd ../

curl -LO https://github.com/RDoneux/folder-creator-loddon/archive/refs/heads/master.zip
tar -xf master.zip
rename folder-creator-loddon-master folder-creator-loddon
rmdir /S master.zip

::rmdir /S application
::mkdir application
::cd application
::mkdir backend
::mkdir application
::cd backend
::mkdir lib
::mkdir jdk-18.0.1.1
::cd ../../folder-creator-loddon
::call npm run package:win
::cd packages
::xcopy "folder-creator-0.0.0-win32-x64" "../../application/application" /E

::cd ../../folder-creator-api/api

::call ./gradlew build
::call ./gradlew createExe

::cd build/launch4j

::copy api.exe "..\..\..\..\application\backend"
::xcopy "lib" "..\..\..\..\application\backend\lib" /E /I
::cd ../../../../
::xcopy "jdk-18.0.1.1" "application/backend/jdk-18.0.1.1" /E /I

::cd application

::echo|set /p="tasklist /nh /fi imagename eq api.exe | find /i api.exe > nul || " > start.bat
::echo start backend/api.exe >> start.bat
::echo ping 192.0.2.2 -n 1 -w 6000 > nul >> start.bat
::echo start application/folder-creator-0.0.0.exe >> start.bat

pause
