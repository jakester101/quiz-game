var timer = document.querySelector(".timer");
var main = document.querySelector(".main");

timer.textContent = "Time: 90"
var gameState = 1;


function gameOver(){

  gameState = 0;
  var bottom = document.getElementById('main1');
  restoreh1 = document.createElement('h1');
  restoreh1.setAttribute('id','h1')
  restoreh3 = document.createElement('h3');
  restoreh3.setAttribute('id','h3')
  bottom.appendChild(restoreh1);
  bottom.appendChild(restoreh3);


  var allDone = document.getElementById("h1");
  allDone.innerHTML = "All done!";
  document.getElementById("h3").innerHTML = "Your final score is " + secondsLeft;

  var form = document.createElement('form');
  form.setAttribute("action",'./assets/highscores.html');
  var label = document.createElement('label');
  label.textContent = 'Enter your initials:  ';
  var input = document.createElement('input');
  input.setAttribute('type','text');

  var input2 = document.createElement('input');
  input2.setAttribute('type','submit');

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(input2);
  bottom.appendChild(form);

  input2.addEventListener('click', function(){
    var initials = input.value;

    var highscore = {
      initials: input.value,
      score: secondsLeft
    }

    localStorage.setItem('highscore', JSON.stringify(highscore));

  })






}



//timer function
var count = 0;
var pikachu = 0;
var secondsLeft = 90;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0 && gameState === 1) {
        // Stops execution of action at set interval

        clearInterval(timerInterval);
        gameOver();

        return;
      } else if (secondsLeft !== 0 && gameState === 0){
          clearInterval(timerInterval);

      }
  
    }, 1000);
}

function thatsWrong(){
  var wat = document.querySelector('#correct');
  console.log(wat.textContent);
  if (secondsLeft >=10 && wat.textContent !== 'all of the above' && wat.textContent !== 'quotation marks' && wat.textContent !== 'console.log'){
  secondsLeft -= 10;
    if(pikachu === 0){
      var footer = document.createElement('h3');
      footer.setAttribute('id', 'footer');
      document.getElementById('main1').appendChild(footer);
      pikachu +=1;
    }
    var footer = document.getElementById('footer');
    if(footer.textContent !== 'Incorrect!'){
      footer.textContent = 'Incorrect!';
    }
  count += 1;

  }

  

  


}

function thatsCorrect(){
  if(pikachu === 0){
    var footer = document.createElement('h3');
    footer.setAttribute('id', 'footer');
    document.getElementById('main1').appendChild(footer);
    pikachu +=1;
  }

  var footer = document.getElementById('footer');
  if(footer.textContent !== 'Correct!'){
    footer.textContent = 'Correct!';
  }
  count += 1;

}


function gameStart(){

  gameState = 1;


  //remove landing elements
  document.getElementById('h1').remove();
  document.getElementById('h3').remove();
  document.getElementById('start').remove();

  var question = document.createElement('h1');
  var list = document.createElement('ol');
  var num1 = document.createElement('li');
  var num2 = document.createElement('li');
  var num3 = document.createElement('li');
  var num4 = document.createElement('li');

  question.setAttribute('id','question');

  document.getElementById('main1').appendChild(question);
  list.appendChild(num1);
  list.appendChild(num2);
  list.appendChild(num3);
  list.appendChild(num4);
  document.getElementById('main1').appendChild(list);



    //question 1
  question.textContent = 'Commonly used data types do NOT include:';
  num1.textContent = 'strings';
  num1.setAttribute('id', 'wrong');
  num2.textContent = 'booleans';
  num2.setAttribute('id', 'wrong'); 
  num3.textContent = 'alerts';
  num3.setAttribute('id','correct');
  num4.textContent = 'numbers';
  num4.setAttribute('id','wrong');

  var correct = document.body.querySelector('#correct');
  var wrong = document.body.querySelectorAll('#wrong');

  correct.addEventListener('click', thatsCorrect);
  correct.addEventListener('click', function(){
    if (count === 1){
      question2();
    }
  });


  for(var i =0; i < wrong.length; i++){
    wrong[i].addEventListener('click', thatsWrong);
    wrong[i].addEventListener('click', function(){
      if (count === 1){
        question2();

      }
    });

  }
}

function question2(){


  if(count === 1){
    var question = document.getElementById('question');
    var list = document.getElementsByTagName('li');



    question.textContent = 'The Condition in an if / else statement is enclosed with: ';
    list[0].textContent = 'quotes';
    list[0].setAttribute('id', 'wrong');
    list[1].textContent = 'curly brackets';
    list[1].setAttribute('id', 'wrong'); 
    list[2].textContent = 'parenthesis';
    list[2].setAttribute('id','correct');
    list[3].textContent = 'square bracket';
    list[3].setAttribute('id','wrong');

    var correct = document.body.querySelector('#correct');
    var wrong = document.body.querySelectorAll('#wrong');

    correct.addEventListener('click', thatsCorrect);
    correct.addEventListener('click', question3);


    for(var i =0; i < wrong.length; i++){
      wrong[i].addEventListener('click', thatsWrong);
      wrong[i].addEventListener('click', question3);
    }
  }
}

function question3(){


  if(count === 2){
    var question = document.getElementById('question');
    var list = document.getElementsByTagName('li');



    question.textContent = 'Arrays in JavaScript can be used to store: ';
    list[0].textContent = 'numbers and strings';
    list[0].setAttribute('id', 'wrong');
    list[1].textContent = 'other arrays';
    list[1].setAttribute('id', 'wrong'); 
    list[2].textContent = 'booleans';
    list[2].setAttribute('id','wrong');
    list[3].textContent = 'all of the above';
    list[3].setAttribute('id','correct');

    var correct = document.body.querySelector('#correct');
    var wrong = document.body.querySelectorAll('#wrong');


    correct.addEventListener('click', thatsCorrect);
    correct.addEventListener('click', question4);

    for(var i =0; i < wrong.length; i++){
      wrong[i].addEventListener('click', thatsWrong);
      wrong[i].addEventListener('click', question4);

    }
  }
}

function question4(){


  if(count === 3){
    var question = document.getElementById('question');
    var list = document.getElementsByTagName('li');



    question.textContent = 'String values must be enclosed in ________ when being assigned to variables: ';
    list[0].textContent = 'commas';
    list[0].setAttribute('id', 'wrong');
    list[1].textContent = 'curly brackets';
    list[1].setAttribute('id', 'wrong'); 
    list[2].textContent = 'quotation marks';
    list[2].setAttribute('id','correct');
    list[3].textContent = 'parenthesis';
    list[3].setAttribute('id','wrong');

    var correct = document.body.querySelector('#correct');
    var wrong = document.body.querySelectorAll('#wrong');

    correct.addEventListener('click', thatsCorrect);
    correct.addEventListener('click', question5);


    for(var i =0; i < wrong.length; i++){
      wrong[i].addEventListener('click', thatsWrong);
      wrong[i].addEventListener('click', question5);

    }
  }

}

function question5(){


  if(count === 4){
    var question = document.getElementById('question');
    var list = document.getElementsByTagName('li');



    question.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is: ';
    list[0].textContent = 'JavaScript';
    list[0].setAttribute('id', 'wrong');
    list[1].textContent = 'terminal/bash';
    list[1].setAttribute('id', 'wrong'); 
    list[2].textContent = 'for loops';
    list[2].setAttribute('id','wrong');
    list[3].textContent = 'console.log';
    list[3].setAttribute('id','correct');

    var correct = document.body.querySelector('#correct');
    var wrong = document.body.querySelectorAll('#wrong');


    correct.addEventListener('click', thatsCorrect);
    correct.addEventListener('click', gameOver);

    for(var i =0; i < wrong.length; i++){
      wrong[i].addEventListener('click', thatsWrong);
      wrong[i].addEventListener('click', gameOver);

    }
  }

}



var start = document.body.querySelector("#start");  
start.addEventListener("click", setTime);
start.addEventListener("click", gameStart);



