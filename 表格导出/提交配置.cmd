@echo off
cls
set pp=%cd%
setlocal enableextensions
set tips="正在执行....莫慌~"
goto menu


:menu
prompt -$g
cls
title 配置提交 控制面板 (Power By XiaoXiaoLiang)
echo   ________________________________________________________________
echo  ^|                                                                ^|
echo  ^|           配置提交 控制面板 (Power By XiaoXiaoLiang)           ^|
echo  ^|                                                                ^|
echo  ^|     0 - 更新所有配置               10 - 提交所有配置           ^|
echo  ^|     1 - 更新服务端配置             11 - 提交服务端配置         ^|
echo  ^|     2 - 更新客户端                 12 - 提交客户端             ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|                                                                ^|
echo  ^|     20 - toClient.bat              30 - 一键完成               ^|
echo  ^|________________________________________________________________^|
set /p input=-^> 请选择: 
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
call 一键提交.bat
cd %pp%
goto menu



:end
prompt
popd
