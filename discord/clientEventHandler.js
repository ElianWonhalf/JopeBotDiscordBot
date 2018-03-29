const Config = require('../config');

global.client.on("message", msg => {
    const memberToMention = global.client.users.get(Config.userIdToMention);
    const author = msg.author;
    let found = false;

    for (let i = 0; i < Config.triggerEmojis.length && !found; i++) {
        if (msg.content.indexOf('<' + Config.triggerEmojis[i] + '>') > -1) {
            found = true;
        }
    }

    if (found) {
        if (author.equals(memberToMention) && msg.mentions.users.has(global.client.user.id)) {
            msg.channel.send(memberToMention + ', okay so you\'re using the emoji so I mention you, AND you dare mention me? Stop trying to steal my job.');
        } else if (author.equals(memberToMention)) {
            msg.channel.send(memberToMention + ', now even you are using these emojis. You\'re asking for more mention spam? *Everything is going as planned*');
        } else if (msg.mentions.users.has(global.client.user.id)) {
            msg.channel.send(memberToMention + ', ' + author + ' used your emoji AND dared mention me. I\'ll let you take care of this. No witnesses.');
        } else {
            msg.channel.send(memberToMention + ', ' + author + ' used your emoji, they must need you!');
        }
    } else if (msg.mentions.users.has(global.client.user.id)) {
        const snarkyRemarks = [
            author + ', what do you want from me? Oh wait, I wasn\'t listening. Oh, did you notice? I\'m still not listening!',
            'Hey everyone, did you notice how ' + author + ' is trying to catch my attention? Me neither.',
            'Could you please not, ' + author + '?',
            'What are you trying to accomplish by mentioning me, ' + author + '?',
            'Your actions will be reported to the authorities, ' + author + '.',
            author.toString(),
            author + ' ' + author,
            '...',
            '..?',
        ];

        msg.channel.send(snarkyRemarks[Math.floor(Math.random() * snarkyRemarks.length)]);
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