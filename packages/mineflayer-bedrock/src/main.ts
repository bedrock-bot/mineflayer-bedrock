import { createBot } from 'mineflayer';
import mineflayerPathfinder from 'mineflayer-pathfinder'
import { viewerPlugin } from './plugins/viewer.ts'
import { viewerClickToMovePlugin } from './plugins/viewer-click-to-move.ts'
import { pathFinderFollowPlugin } from './plugins/pathfinder-follow.ts';

const bot = createBot({
    host: '127.0.0.1',
    port: 19132,
    auth: 'offline',
    username: 'BedrockBot',
    version: 'bedrock_1.21.70',
    profilesFolder: 'C:/git/profiles',
    offline: true,
});

bot.once('inject_allowed', () => {
    console.log('loading pathfinder');
    bot.loadPlugin(mineflayerPathfinder.pathfinder);
    bot.defaultMovements = new mineflayerPathfinder.Movements(bot)
    bot.defaultMovements.canDig = false;
    bot.defaultMovements.canOpenDoors = false;

    console.log('loading pathFinder - follow plugin');
    bot.loadPlugin(pathFinderFollowPlugin);

    bot.pathfinder.setMovements(bot.defaultMovements);
})

bot.on('error', (err) => console.error(err));
bot.on('end', () => console.log('Bot disconnected.'));
bot.once('spawn', () => {
    console.log('Bot spawned!');

    console.log('loading viewer plugin');
    bot.loadPlugin(viewerPlugin);

    console.log('loading viewer - click to move plugin');
    bot.loadPlugin(viewerClickToMovePlugin);
})
