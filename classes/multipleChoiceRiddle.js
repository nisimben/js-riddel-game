import  Riddle  from "./riddel.js";

export default class MultipleChoiceRiddle extends Riddle {
  constructor(raw) {
    super({ ...raw, type: 'multiple-choice' });
    this.choices = raw.choices || [];
  }
ask(readline) {
  console.log(`\nRiddle ${this.id}: ${this.name}`);
  console.log(this.taskDescription);


  this.choices.forEach((choice, index) => {
    console.log(`${index + 1}) ${choice}`);
  });

  const correctIndex = this.choices.indexOf(this.correctAnswer);

  if (correctIndex === -1) {
    console.log(' correctAnswer not found in choices ');
    return;
  }

  let flag = true;

  while (flag) {
    const input = readline.question('Choose a number: ');
    const num = parseInt(input, 10);

    if (Number.isNaN(num) || num < 1 || num > this.choices.length) {
      console.log(`Invalid choice. Please enter a number between 1 and ${this.choices.length}.`);
      continue;
    }

    const chosenIndex = num - 1;

    if (chosenIndex === correctIndex) {
      console.log('Correct!');
      flag = false;
    } else {
      console.log('Wrong! Please try again!');
    }
  }
}


}