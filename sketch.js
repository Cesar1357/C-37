var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(keyCode === 32){
    database.ref('/').update({
      contestantCount:0
    }) 
    database.ref('/').update({
      gameState:0
    }) 
    Quiz.clear()
    quiz = new Quiz;
    quiz.getState();
    quiz.start();


  }
}
