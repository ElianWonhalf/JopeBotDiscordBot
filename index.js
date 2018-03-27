const Config = require('./config');
const Discord = require('discord.js');

global.client = new Discord.Client();

require('./system/processEventHandler');
require('./discord/clientEventHandler');

global.client.login(Config.token);
