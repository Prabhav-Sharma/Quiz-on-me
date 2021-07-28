var readline= require('readline-sync');

var name= readline.question("Can I have your name? ");


var questionOne ={
  question:"Who is my favorite superhero? ",
  answer:"Iron Man"
}

var questionTwo ={
  question:"Which is my favourite sad song? ", 
  answer:"Channa Mereya"
}

var questionThree ={
  question:"Which is my favourite food? ", 
  answer:"Chicken"
}
var questionFour ={
  question:"Which is my favourite fast-food chain? ", 
  answer:"Taco Bell"
}
var questionFive ={
  question:"Which is my favourite kind of pet? ", 
  answer:"Dogs"
}

var score=0;

function play(question, answer){
var userAnswer= readline.question(question);

if(userAnswer.toUpperCase()===answer.toUpperCase()){
  console.log('You are absolutely Right!')
  score++;
}else{
  console.log("That's Incorrect Boohoo");
}
console.log("Current Score: " + score);
console.log("----------------------");
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(var i=0; i<questions.length; i++){
  play(questions[i].question,questions[i].answer);
}

console.log("Game Over");
console.log( name + "'s score: " + score);

var umme={
  name:"Umme",
  score:5
};

var prabhav={
  name:"Prabhav",
  score:4
};
var user={
  name: name,
  score:score
};

var scores=[umme, prabhav, user];

for(var i=0; i<scores.length; i++){
  console.log(scores[i])
}
if(score >= umme.score){
  console.log("You've set a high score!!");
}