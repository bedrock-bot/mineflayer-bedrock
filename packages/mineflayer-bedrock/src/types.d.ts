import {Movements} from 'mineflayer-pathfinder'
import {EventEmitter} from 'events'
import {viewer} from 'prismarine-viewer';
import {Vec3} from 'vec3';
import {world} from 'prismarine-world'
import type { RaycastBlock } from 'prismarine-world/types/iterators.js';
import type { Block } from "prismarine-block";


interface Viewer extends EventEmitter<{'blockClicked': [RaycastBlock & Block, number, number]}> {
    erase(id: string): void;
    drawBoxGrid(id: string, start:Vec3, end: Vec3, color?: string): void
    drawLine(id: string, points: Vec3[], color?: string | number): void;
    drawPoints(id: string, points: Vec3[], color?: string | number, size?: number): void;
    close(): void;
}

declare module 'mineflayer' {
	interface Bot {
		defaultMovements: Movements;
        viewer: Viewer;
	}

    interface BotOptions {
        offline?: boolean
    }
}
