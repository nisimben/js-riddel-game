import readlineSync from 'readline-sync';
import { Player } from "./classes/player.js";


const player = new Player(readlineSync.question('What is your name? '));
console.log(`Welcome ${player.name}!`);