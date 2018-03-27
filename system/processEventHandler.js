const Config = require('../config');

process.on('uncaughtException', (exception) => {
    if (typeof global.client === 'undefined') {
        console.log('Crashed at an unknown position. This is weird. This shouldn\'t happen. SEND HALP!');
        console.log('----');
        console.log(exception);
        console.log('----');
    } else {
        console.log('I crashed. I CRASHED D: !');
        console.log('----');
        console.log(exception);
        console.log('----');

        global.client.destroy().then(() => {
            global.client.login(Config.token);
        });
    }
});