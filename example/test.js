'use strict';

const env = 'dev';
const configPath = __dirname;

try {
    var config = require('../').init(configPath, env);
} catch(err) {
    if(err.code === 'MODULE_NOT_FOUND') {
        console.error(`Missing module config_${env}.js. Create it or change ENV environment var.`);
    } else {
        console.error(err);
    }
    return;
}