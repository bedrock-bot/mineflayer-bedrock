import { createBot } from 'mineflayer';

const bot = createBot({
    host: '127.0.0.1',
    port: 19132,
    auth: 'offline',
    username: '',
    version: 'bedrock_1.21.70',
    profilesFolder: ''
});


// Event listener to log when the bot connects
bot.on('spawn', () => {
    console.log('Bot spawned!');
});

// Log errors
bot.on('error', (err) => console.error(err));
bot.on('end', () => console.log('Bot disconnected.'));
