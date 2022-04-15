#!/bin/bash
docker-compose up -d
npm install
npm run migrate
ts-node src/index.ts
