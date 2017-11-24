'use strict';

const env = process.env.ENV || 'dev';
const configPath = __dirname;

console.log("Loading config");
var config = require('../').init(configPath, env);
console.log("Config Loaded");
console.log("Are we in dev ? "+config.isDev);