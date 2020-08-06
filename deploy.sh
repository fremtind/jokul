#!/bin/sh

# https://github.com/thii/aws-codebuild-extras
export CODEBUILD_GIT_BRANCH="$(git symbolic-ref HEAD --short 2>/dev/null)"
if [ "$CODEBUILD_GIT_BRANCH" = "" ] ; then
  export CODEBUILD_GIT_BRANCH="$(git rev-parse HEAD | xargs git name-rev | cut -d' ' -f2 | sed 's/remotes\/origin\///g')";
fi

export CODEBUILD_GIT_CLEAN_BRANCH="$(echo $CODEBUILD_GIT_BRANCH | tr '/' '-')"

mkdir -p "temp/$CODEBUILD_GIT_CLEAN_BRANCH"
mv ./portal/public/* "temp/$CODEBUILD_GIT_CLEAN_BRANCH"

aws s3 sync ./temp s3://jokul-staging
