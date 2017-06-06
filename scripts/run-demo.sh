#!/usr/bin/env bash

cd ./demo
npm prune
npm install
npm update
npm run start &
cd ../
