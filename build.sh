git add .
git commit -m "commiting changes"
git fetch
git merge origin/dev
npm run build
git add .
git commit -m "building"
git push origin dev
rm -rf dist
