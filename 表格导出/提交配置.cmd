@echo off
cls
set pp=%cd%
setlocal enableextensions
set tips="����ִ��....Ī��~"
goto menu


:menu
prompt -$g
cls
title �����ύ ������� (Power By XiaoXiaoLiang)
echo   ________________________________________________________________
echo  ^|                                                                ^|
echo  ^|           �����ύ ������� (Power By XiaoXiaoLiang)           ^|
echo  ^|                                                                ^|
echo  ^|     0 - ������������               10 - �ύ��������           ^|
echo  ^|     1 - ���·��������             11 - �ύ���������         ^|
echo  ^|     2 - ���¿ͻ���                 12 - �ύ�ͻ���             ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|     20 - toClient.bat              30 - һ�����               ^|
echo  ^|________________________________________________________________^|
set /p input=-^> ��ѡ��: 
cls
echo.
title %tips%
echo   ________________________________________________________________
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                %tips%                             ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|________________________________________________________________^|
if "%input%"=="20" goto toClient
if "%input%"=="30" goto onekey
if "%input%"=="0" goto A
if "%input%"=="1" goto B
if "%input%"=="2" goto C
if "%input%"=="10" goto AA
if "%input%"=="11" goto BB
if "%input%"=="12" goto CC

:A
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:update /path:"client\resource\*server\bin\gameworld\data\config\*client\data\" /closeonend 3
cd %pp%
goto menu

:B
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:update /path:"server\bin\gameworld\data\config\" /closeonend 3
cd %pp%
goto menu

:C
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:update /path:"client\resource\*client\data\" /closeonend 3
cd %pp%
goto menu



:AA
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:commit /path:"client\resource\*server\bin\gameworld\data\config\*client\data\"
cd %pp%
goto menu

:BB
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:commit /path:"server\bin\gameworld\data\config\"
cd %pp%
goto menu

:CC
cd ..
"C:\Program Files\TortoiseSVN\bin\TortoiseProc.exe" /command:commit /path:"client\resource\*client\data\"
cd %pp%
goto menu

:toClient
cd ..
call toClient.bat
cd %pp%
goto menu

:onekey
call һ���ύ.bat
cd %pp%
goto menu



:end
prompt
popd
