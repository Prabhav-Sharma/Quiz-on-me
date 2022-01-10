//ES6 Version Code 

const readline= require('readline-sync');

const name= readline.question("Can I have your name? ");


const questionOne ={
  question:"Who is my favorite superhero? ",
  answer:"Iron Man"

}

const questionTwo ={
  question:"Which is my favourite sad song? ", 
  answer:"Channa Mereya"
}

const questionThree ={
  question:"Which is my favourite food? ", 
  answer:"Chicken"
}
const questionFour ={
  question:"Which is my favourite fast-food chain? ", 
  answer:"Taco Bell"
}
const questionFive ={
  question:"Which is my favourite kind of pet? ", 
  answer:"Dogs"
}

let score=0;

const play=(question, answer)=>{
let userAnswer= readline.question(question);

if(userAnswer.toUpperCase()===answer.toUpperCase()){
  console.log('You are absolutely Right!')
  score++;
}else{
  console.log("That's Incorrect Boohoo");
}
console.log(`Current Score: ${score}`);
console.log("----------------------");
}

let questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(let i=0; i<questions.length; i++){
  play(questions[i].question,questions[i].answer);
}

console.log("Game Over");
console.log( name + "'s score: " + score);

let umme={
  name:"Umme",
  score:5
};

let prabhav={
  name:"Prabhav",
  score:4
};
let user={
  name: name,
  score:score
};

let scores=[umme, prabhav, user];

for(let i=0; i<scores.length; i++){
  console.log(scores[i])
}
if(score >= umme.score){
  console.log("You've set a high score!!");
}