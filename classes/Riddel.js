export class Riddel {
    constructor(id, name, taskDescription, correctAnswer, choices) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
        this.choices = choices;
    }
    ask(readline){
        console.log(`\n Riddle ${this.id}: ${this.name}`);
        console.log(this.taskDescription);
        let flag = true;
        while(flag){
            let answer = readline.question('Answer: ');
            if(answer.toLowerCase() === this.correctAnswer.toLowerCase()){
                console.log('Correct!');
                flag = false;
            }
            else{
                console.log('Wrong Plrease try again!');
            }
        }

    }
}