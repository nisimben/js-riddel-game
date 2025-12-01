export default class Riddle {
  constructor({ id, name, taskDescription, correctAnswer, choices = [], type}) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
    this.choices = choices;
    this.type = type;
  }
    ask(readline){
        console.log(`\n Riddle ${this.id}: ${this.name}`);
        console.log(this.taskDescription);
        let flag = true;
        while(flag){
            let answer = readline.question('Answer: ');
            if(answer === this.correctAnswer){
                console.log('Correct!');
                flag = false;
            }
            else{
                console.log('Wrong Plrease try again!');
            }
        }

    }
}