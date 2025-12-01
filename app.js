import readlineSync from 'readline-sync';
import { Player } from "./classes/player.js";
import allMyRiddeles from "./reddeles/module.js";
import { Riddel } from "./classes/riddel.js";


const player = new Player(readlineSync.question('What is your name? '));
console.log(`Welcome ${player.name}!`);
const allRiddeles = allMyRiddeles.map((riddel) => new Riddel(riddel.id, riddel.name, riddel.taskDescription, riddel.correctAnswer, riddel.choices));
allRiddeles.forEach((riddel) => riddel.ask(readlineSync));
