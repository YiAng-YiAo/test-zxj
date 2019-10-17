@echo off

if "%1"=="" (
echo 请传入lua文件或目录
pause
exit
)

echo %~dp0
%~d0
cd %~dp0

echo %1
lua tool/lua2excel.lua %1
pause


