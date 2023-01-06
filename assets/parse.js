var lastscore = JSON.parse(localStorage.getItem('highscore'));

nuts = document.getElementById('high');

var list = document.createElement('h3');

list.textContent = lastscore.initials + "          " + lastscore.score;

nuts.appendChild(list);