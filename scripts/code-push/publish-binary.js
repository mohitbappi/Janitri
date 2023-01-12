/* eslint-disable*/
const path = require('node:path');

const args = process.argv.slice(2);
const { exec } = require('./utils');

const buildType = args[0];

const androidFolderPath = path.resolve('android');
console.log('Switching to android folder:', androidFolderPath);
process.chdir(androidFolderPath);

console.log('Creating production binary type:', buildType);
const buildCommand = `./gradlew clean ${buildType}Release`;
console.log('Executing:', buildCommand);
exec(buildCommand)
  .then(() => {
    console.log('Android build created.');
  });
