'use strict';

const env = process.env.ENV || 'dev';
const configPath = __dirname;

console.log("Loading config...");
const config = require('../')(configPath, env);
console.log("Config Loaded");

console.log("Are we in dev ? " + config.isDev);
console.log("Arrays are overridden: " + config.simpleArray);
console.log("Objects are merged, properties overridden: " + JSON.stringify(config.object));

require('./testRequired');
