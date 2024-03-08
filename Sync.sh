#! /bin/bash

echo "syncing master branch and merging with branch anushthan"

git checkout master
git pull

git checkout anushthan
git merge origin/master