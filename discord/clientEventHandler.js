const Config = require('../config');

global.client.on("message", msg => {
    const mentioned = global.client.users.get(Config.userIdToMention);
    let found = false;

    for (let i = 0; i < Config.triggerEmojis.length && !found; i++) {
        if (msg.content.indexOf('<' + Config.triggerEmojis[i] + '>') > -1) {
            found = true;
        }
    }

    if (found) {
        msg.channel.send(mentioned.toString());
    }
});

global.client.on('ready', () => {
    console.log('I am ready!');
});

global.client.on('disconnect', () => {
    console.log("I'm disconnecting now (uptime: " + global.client.uptime + ")");
});

global.client.on('warn', (info) => {
    console.log("Warning (uptime: " + global.client.uptime + "): "+info);
});