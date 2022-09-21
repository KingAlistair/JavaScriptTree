function out(any) { console.log(any)}
out("ready to guess")

const lblMessage = document.querySelector(".message");
out(lblMessage);
const lblNumber = document.querySelector(".number");
out(lblNumber);
const lblScore = document.querySelector(".score");
out(lblScore);
const inpGuess = document.querySelector(".guess");
out(inpGuess);

function checkNumber(btn) {
  out("check number")

  let guess = inpGuess.value;
  out("Guess= " + guess)
  const isNumber = Number(guess);

  if (!isNumber) {
    lblMessage.textContent = "💥 Not a number";
  } else {

    if (guess > secretNumber) {
      lblMessage.textContent = "Value is to high"
    } else {
      if (guess < secretNumber) {
        lblMessage.textContent = "Value is to low"
      } else {
        lblMessage.textContent = "You guessed the number 🍟"
      }
    }
  }
}

let secretNumber = Math.floor(Math.random()*20 + 1);
out(secretNumber)

function getNewNumber(btn) {
  out("get new number")
  secretNumber = Math.floor(Math.random()*20 + 1);
  out("Secret number =" + secretNumber)
  lblMessage.textContent = "Start guessing..."
}

const pbCheck = document.querySelector(".check")
pbCheck.addEventListener('click', checkNumber)
const pbAgain = document.querySelector(".again")
pbAgain.addEventListener('click', getNewNumber)
