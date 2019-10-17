@echo off

set post=.lua

if "%1"=="" (
::if exist %1 (
for %%i in (*.xlsx) do (
	start cmd /k lua ../tool/excel2lua.lua %cd%/%%i
	)
) else (
	echo %1
	lua ../tool/excel2lua.lua %1
	pause
)

