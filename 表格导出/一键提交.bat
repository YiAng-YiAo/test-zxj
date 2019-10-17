@echo off
cls
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:update /path:"client\data\" /closeonend 3
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:update /path:"server\bin\gameworld\data\config\" /closeonend 3
set pp=%cd%
call toClient.bat
echo %pp%
cd %pp%
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:commit /path:"client\resource\resource\cfg\*server\bin\gameworld\data\config\*client\data\"
pause