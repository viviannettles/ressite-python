@echo off
setlocal enabledelayedexpansion

echo ===========================
echo 1. CHECKING PATHS
echo ===========================

set ROOT_DIR=%~dp0
set FRONTEND_DIR=%ROOT_DIR%frontend
set STATIC_DIR=%ROOT_DIR%backend\static\browser

echo Project root: %ROOT_DIR%
echo Angular project: %FRONTEND_DIR%
echo Angular output folder: %STATIC_DIR%

echo.

echo ===========================
echo 2. CLEAN EXISTING STATIC FILES
echo ===========================

if exist "%STATIC_DIR%" (
    echo Removing old browser assets...
    rmdir /s /q "%STATIC_DIR%"
)

mkdir "%STATIC_DIR%"
echo Cleaned and recreated: %STATIC_DIR%

echo.

echo ===========================
echo 3. BUILDING ANGULAR FRONTEND
echo ===========================

cd "%FRONTEND_DIR%"
call npm install
call npx ng build --configuration production

if %errorlevel% neq 0 (
    echo Angular build FAILED.
    exit /b 1
)

echo Angular build complete.
echo Output should now be inside backend/static/browser

echo.

echo ===========================
echo 4. STARTING PYTHON BACKEND
echo ===========================

cd "%ROOT_DIR%backend"
python main.py

endlocal
