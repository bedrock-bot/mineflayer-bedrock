import type { Bot, BotOptions } from "mineflayer";
import * as pathfinder from 'mineflayer-pathfinder'

export function viewerClickToMovePlugin(bot: Bot, options: BotOptions) {
    bot.viewer.on('blockClicked', (block, face, button) => {
        console.log('blockClicked', block, face, button)
        if (button !== 2) return // only right click
    
        const p = block.position.offset(0, 1, 0)
        bot.pathfinder.setGoal(new pathfinder.default.goals.GoalBlock(p.x, p.y, p.z))
    })
}

