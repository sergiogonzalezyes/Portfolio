npm run build

LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

cd dist

git init
git add -A
git commit -m "deploy (commit: $COMMIT)"

git push -f https://github.com/sergiogonzalezyes/SuperheroVillain-API-App.git main:gh-pages

cd ..
