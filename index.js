'use strict';

/*
 * Merge the default configuration (config.js) with an environment configuration (config_{ENV}.js)
 */

//Node.js Dependencies
const path       = require('path');

//NPM Dependencies
const _          = require('lodash');

//Module Vars
const defaultName = 'config';
const defaultSeparator = '_';

//Module Logic
const Config = {
    _config: undefined,
    getConfig() {
        if(this._config === undefined) {
            throw new Error("Configuration has not been initialized.");
        }
        return this._config;
    },
    init(configPath, env, name, separator) {
        name = name || defaultName;
        separator = separator || defaultSeparator;

        const defaultConfigPath = path.join(configPath, name);
        const envConfigPath = path.join(configPath, name + separator + env.toLowerCase());

        try {
            var defaultConfig = require(defaultConfigPath);
        } catch(err) {
            if(err.code === 'MODULE_NOT_FOUND') {
                console.error(`Missing default configuration file at path ${defaultConfigPath}`);
            } else {
                console.error("Error detected during execution of default config file.");
                console.error(err);
            }
            process.exit();
        }

        try {
            var envConfig = require(envConfigPath);
        } catch(err) {
            if(err.code === 'MODULE_NOT_FOUND') {
                console.error(`Missing environment configuration file at path ${envConfigPath}`);
            } else {
                console.error("Error detected during execution of environment config file.");
                console.error(err);
            }
            process.exit();
        }

        //Default Configuration is surcharged by environment configuration. Every Array is entirely surcharged by the environment config. Objects are merged.
        this._config =  _.mergeWith(defaultConfig, envConfig,
            function (objValue, srcValue) {
                if (_.isArray(objValue)) {
                    return srcValue;
                }
            }
        );

        return this._config;
    }
};

module.exports = Config;
