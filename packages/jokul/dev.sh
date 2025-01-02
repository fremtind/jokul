#! /bin/sh

GUM_PATH=$(command -v gum)

if [ "$GUM_PATH" = "" ]  
then
    echo "gum is not installed"
    echo "see https://github.com/charmbracelet/gum?tab=readme-ov-file#installation"
    exit 1
fi

COMPONENT=$(find src/components/* -iname documentation -type d | cut -d "/" -f 3 | gum filter)

if [ "$COMPONENT" = "" ]
then
  exit 1
fi

node create-vite-server.mjs $COMPONENT 
