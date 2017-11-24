# config-loader
NPM Module for Environment Config Load  

Use a default configuration file, and overwrite it with an environment specific configuration file.  
This use Lodash _.mergeWith() function, however arrays are not merged but replaced.

### Installation
```sh
npm install config-loader
```

### Initialisation
```javascript
const configPath = path.join(__dirname,'./config');
const env = process.env.environment;
const config = require('@ecocea/config-loader').init(configPath, env);
```

### Other calls
```javascript
const config = require('@ecocea/config-loader').getConfig();
```

### Config load and Customization
The script expect a file named config.js in the configPath, and every environment config file should be named config_{env}.js
You can customize the configuration file name, and the separator between filename and environment:
```javascript
const configPath = path.join(__dirname,'./config');
const env = process.env.environment;
const configName = "properties";
const configSeparator = "-";
const config = require('config-loader').init(configPath, env, configName, configSeparator);
```

### Tips for Heroku
Avoid using too much Heroku Config Vars. If you want the ability to quickly override a config var without deploying, you can do:
```javascript
const myConfigVar = process.env.MY_CONFIG_VAR || 'ThisIsMyConfigVar';
```