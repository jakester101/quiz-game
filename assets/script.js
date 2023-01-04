var timer = document.querySelector(".timer");
var main = document.querySelector(".main");

timer.textContent = "Time: 5"






//timer function

function gameOver(){
var allDone = document.getElementById("h1");
allDone.innerHTML = "All done!";
document.getElementById("h3").innerHTML = "Your final score is " + secondsLeft;
document.getElementById("start").innerHTML = " ";

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


var bottom = document.getElementById('main1');
bottom.appendChild(form);


}





var secondsLeft = 5;
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

function gameStart(){





}








var start = document.body.querySelector("#start");  
start.addEventListener("click", setTime);
start.addEventListener("click", gameStart);


