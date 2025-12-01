import readlineSync from 'readline-sync';
import { Player } from "./classes/player.js";
import allMyRiddeles from "./riddeles/module.js";
import { createRiddleInstance } from "./utills/generate-riddle.js";


const player = new Player(readlineSync.question('What is your name? '));
console.log(`Welcome ${player.name}!`);

const allRiddeles = allMyRiddeles.map(createRiddleInstance);

allRiddeles.forEach(riddle => riddle.ask(readlineSync));


