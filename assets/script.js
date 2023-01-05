var timer = document.querySelector(".timer");
var main = document.querySelector(".main");

timer.textContent = "Time: 90"
var gameState = 1;


function gameOver(){
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


}



//timer function
var pikachu = 0;
var secondsLeft = 90;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval

        clearInterval(timerInterval);
        gameOver();
      }
  
    }, 1000);
}


function question5(){



  question = document.getElementById('question');
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




    function thatsWrong(){

      if (secondsLeft >=10){
      secondsLeft -= 10;
      }

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
      gameOver();

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

      gameOver();

    }

  correct.addEventListener('click', thatsCorrect);
  for(var i =0; i < wrong.length; i++){
    wrong[i].addEventListener('click', thatsWrong);
  }

}
function question4(){



  question = document.getElementById('question');
  var list = document.getElementsByTagName('li');



  question.textContent = 'String values must be enclosed in ________ when being assigned to variables: ';
  list[0].textContent = 'commas';
  list[0].setAttribute('id', 'wrong');
  list[1].textContent = 'curly brackets';
  list[1].setAttribute('id', 'wrong'); 
  list[2].textContent = 'quotes';
  list[2].setAttribute('id','wrong');
  list[3].textContent = 'parenthesis';
  list[3].setAttribute('id','correct');

  var correct = document.body.querySelector('#correct');
  var wrong = document.body.querySelectorAll('#wrong');
  var pikachu = 0;



    function thatsWrong(){

      if (secondsLeft >=10){
      secondsLeft -= 10;
      }

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
      question5();

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

      question5();

    }

  correct.addEventListener('click', thatsCorrect);
  for(var i =0; i < wrong.length; i++){
    wrong[i].addEventListener('click', thatsWrong);
  }

}
function question3(){



  question = document.getElementById('question');
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




    function thatsWrong(){

      if (secondsLeft >=10){
      secondsLeft -= 10;
      }

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
      question4();

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

      question4();

    }

  correct.addEventListener('click', thatsCorrect);
  for(var i =0; i < wrong.length; i++){
    wrong[i].addEventListener('click', thatsWrong);
  }

}
function question2(){



  question = document.getElementById('question');
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




    function thatsWrong(){

      if (secondsLeft >=10){
      secondsLeft -= 10;
      }

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
      question3();

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
      question3();


    }




  correct.addEventListener('click', thatsCorrect);
  for(var i =0; i < wrong.length; i++){
    wrong[i].addEventListener('click', thatsWrong);
  }
  


}
function gameStart(){

  


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




    function thatsWrong(){

      if (secondsLeft >=10){
      secondsLeft -= 10;
      }

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
      question2();

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
      question2();


    }




  correct.addEventListener('click', thatsCorrect);
  for(var i =0; i < wrong.length; i++){
    wrong[i].addEventListener('click', thatsWrong);
  }


}








var start = document.body.querySelector("#start");  
start.addEventListener("click", setTime);
start.addEventListener("click", gameStart);


