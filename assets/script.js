var timer = document.querySelector(".timer");
var main = document.querySelector(".main");

timer.textContent = "Time: 5"




main.textContent = "words words words";

//timer function
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


