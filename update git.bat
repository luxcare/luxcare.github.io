@echo off
cd /d "C:\Users\Mike\Music\LuxCare Cleaning Website\Luxcare_Cleaning_Website\frontend\luxcare_cleaning_website"
git add .
git commit -m "Updated API URLs"
git push origin main
npm run deploy
pause
