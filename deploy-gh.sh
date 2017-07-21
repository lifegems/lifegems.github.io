#!/bin/bash

npm run ionic:build --prod
git checkout gh-pages
cp -r www/* ../kings/
git add .
git commit -m "Updated dist (auto-commit)"
echo "Run 'git push origin gh-pages' and then 'git checkout master'"
