:: auto_git_push.bat
cd /d "C:\Users\nji\Desktop\trustfulGlobal\trustfulGlobal"
git add .
git commit -m "Auto-commit: %date% %time%"
git pull
:: Resolve merge conflicts if any
git merge --continue
:: git rebase --abort
:: git rebase --continue
:: git pull --rebase
:: git pull --rebase origin main
git branch -M main
git push -u origin main