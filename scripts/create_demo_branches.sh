#!/bin/zsh

RANDOM_ID=$RANDOM
PROTO_BRANCH="proto_demo_$RANDOM_ID"
DB_BRANCH="db_demo_$RANDOM_ID"

echo $PROTO_BRANCH
echo $DB_BRANCH

git branch -C proto_base $PROTO_BRANCH
git branch -C db_base $DB_BRANCH

git checkout $PROTO_BRANCH
git reset head~1 --soft
git commit -m "Publish events with missing location" 
git push origin $PROTO_BRANCH


git checkout $DB_BRANCH
git reset head~1 --soft
git commit -m "Updates to order_details table" 
git push origin $DB_BRANCH
