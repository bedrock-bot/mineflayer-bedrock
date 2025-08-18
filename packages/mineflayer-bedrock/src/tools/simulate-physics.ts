import { Physics, PlayerState } from 'prismarine-physics';
import mcRegistry, { type Registry } from 'prismarine-registry';
import block, { type Block as PBlock } from "prismarine-block";
import { Vec3 } from 'vec3';
import { EventEmitter } from 'events';
import entityLoader, { type Entity, } from "prismarine-entity";

const registry = mcRegistry("bedrock_1.21.90");
const Block = block(registry) as typeof PBlock;

class FakeWorld {
    groundLevel = 67;
    overrideBlocks: { [key: string]: PBlock } = {};

    setOverrideBlock(pos: Vec3, type: number) {
        pos = pos.floored();
        const block = new Block(type, 0, 0);
        block.position = pos;
        this.overrideBlocks[`${pos.x},${pos.y},${pos.z}`] = block;
    }

    clearOverrides() {
        this.overrideBlocks = {};
    }

    getBlock(pos: Vec3) {
        pos = pos.floored();
        const key = `${pos.x},${pos.y},${pos.z}`;
        if (this.overrideBlocks[key]) {
            return this.overrideBlocks[key];
        }

        const type = pos.y < this.groundLevel ? registry.blocksByName.stone.id : registry.blocksByName.air.id;
        const b = new Block(type, 0, 0);
        b.position = pos;
        return b;
    }
}



export function simulatePhysics() {
    const controlState = {
        forward: false,
        back: false,
        left: false,
        right: false,
        jump: false,
        sprint: false,
        sneak: false
    }
    const world = new FakeWorld();
    const physics = Physics(registry, world);
    const bot = new EventEmitter() as any;
    const entityConstructor = (entityLoader as any)(registry);
    bot.version = "bedrock_1.21.90";
    bot.entity = new entityConstructor(registry.entitiesByName.player.id);
    bot.entity.position.set(0, 67, 0);
    bot.entity.attributes = {};
    bot.jumpTicks = 0;
    bot.jumpQueued = false;
    bot.fireworkRocketDuration = 0;
    bot.inventory = { slots: [] }

    const state = new PlayerState(bot, controlState);
    physics.simulatePlayer(state, world).apply(bot);
    physics.simulatePlayer(state, world).apply(bot);
    physics.simulatePlayer(state, world).apply(bot);
    physics.simulatePlayer(state, world).apply(bot);
    physics.simulatePlayer(state, world).apply(bot);
    physics.simulatePlayer(state, world).apply(bot);
    physics.simulatePlayer(state, world).apply(bot);

    controlState.forward = true;
    controlState.sprint = true;
    state.yaw = (25.985107421875 * Math.PI / 180);
    state.vel.set(-8.518692987624693e-18, -0.0784000015258789, -0.15321675567981913);
    physics.simulatePlayer(state, world).apply(bot);

    console.log(state.vel.x + 0.03047702275216579, state.vel.z + 0.1461847573518753);
}