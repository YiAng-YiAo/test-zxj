@echo off

set post=.lua

if "%1"=="" (
::if exist %1 (
for %%i in (*.xlsx) do (
	cd tool
	start cmd /k excel2lua.exe %cd%/%%i
	)
) else (
	echo %1
	cd tool
	excel2lua.exe %1
	pause
)

