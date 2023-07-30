let min = 1, max = 100;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let guessCount = 0;
let message = document.getElementById('message');

function checkGuess() {
  let guess = document.getElementById('guess').value;
  guessCount++;
	 if(guessCount > 10){
    message.textContent = `これ以上ダメ～`;
    } else if (guess < secretNumber) {
    message.textContent = 'もっと数字が高いよ';
  } else if (guess > secretNumber) {
    message.textContent =	'もっと数字が低い';
  } else{
		message.textContent = `正解だよ！ これだけかかったよ:
    ${guessCount}回 `;
	}
  }

