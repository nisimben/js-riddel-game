import { Riddel } from "Riddel.js";

export class MultipleChoiceRiddle extends Riddel {
    constructor(id, name, taskDescription, correctAnswer, choices) {
        super(id, name, taskDescription, correctAnswer, choices);
        this.choices = choices || [];
        this.type = 'multiple-choice';
    }
}