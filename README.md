# @ecocea/config-loader
NPM Module for Environment Config Load  

Use a default configuration file, and overwrite it with an environment specific configuration file.  
This use Lodash _.mergeWith() function, however arrays are not merged but replaced.

### Prerequisites
Tested on Node.js 8+  
Requires ES6 compatibility

### Installation
```sh
npm install @ecocea/config-loader --save
```

### Initialisation
```javascript
//Path of the directory containing global and environments configurations
const configPath = path.join(__dirname, './config');
  
//Environment config that should be loaded
const env = process.env.environment;
  
//Retrieve the merge configuration of global and specified environment
const config = require('@ecocea/config-loader')(configPath, env);
```

### Other calls
```javascript
const config = require('@ecocea/config-loader');
```

### Config load and Customization
The script expect a file named config.js in the configPath, and every environment config file should be named config_{env}.js
You can customize the configuration file name, and the separator between filename and environment:
```javascript
//Mandatory
const configPath = path.join(__dirname, './config');
const env = process.env.environment;
  
//Optionnal
const configName = "properties";
const configSeparator = "-";
  
//First call
const config = require('@ecocea/config-loader')(configPath, env, configName, configSeparator);
```

### Tips for Heroku
Avoid using too much Heroku Config Vars. If you want the ability to quickly override a config var without deploying, you can do:
```javascript
const myConfigVar = process.env.MY_CONFIG_VAR || 'ThisIsMyConfigVar';
```

### Migrating from 0.x.x to 1.x.x
At first call, remove the init method  
For other calls, remove all .getConfig()