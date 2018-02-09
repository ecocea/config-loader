'use strict';
console.log("Retrieving Config from an other file");
const config2 = require('../');
console.log("Are we in dev ? " + config2.isDev);