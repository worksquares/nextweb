@echo off
echo ========================================
echo Deploying Digisquares Next.js App to Azure
echo ========================================
echo.

REM Change to the nextweb directory
cd /d "E:\code\nextweb\nextweb"

REM Install dependencies if needed
echo Checking dependencies...
if not exist node_modules (
    echo Installing dependencies...
    npm install
)

REM Build the Next.js application
echo.
echo Building Next.js application...
npm run build

if %errorlevel% neq 0 (
    echo.
    echo Build failed! Please fix errors and try again.
    pause
    exit /b 1
)

REM Copy staticwebapp.config.json to out folder
echo.
echo Copying configuration...
copy /Y ..\staticwebapp.config.json out\ >nul 2>&1

REM Deploy to Azure Static Web Apps
echo.
echo Deploying to Azure Static Web Apps...
npx @azure/static-web-apps-cli@latest deploy out --deployment-token "53af29a2562916e9160bfdc394a784d40b3748135411639f4eb4ed151db7003101-ce9cee41-5b0e-4822-9d91-7fa3f2ceab4101013250b1a55410" --env production

if %errorlevel% neq 0 (
    echo.
    echo Deployment failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Your site is available at:
echo - https://yellow-water-0b1a55410.1.azurestaticapps.net (Live Now)
echo - https://digisquares.com (After DNS propagation)
echo - https://www.digisquares.com (After DNS propagation)
echo.
pause