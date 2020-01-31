/*----- constants -----*/
const WORDS = [
  'DEVELOPER', 'ENGINEER', 'NODE', 'JAVASCRIPT',
  'CODING', 'HTML', 'BACK END', 'GUI', 'BOOLEAN',
  'REACT', 'FUNCTION', 'COMPUTER SCIENCE',
  'SEPARATION OF CONCERNS'
];
const WRONG_GUESS_HUNG_COUNT = 6;

/*----- app's state (variables) -----*/
let secretWord;
let guessWord;
let usedLetters;
let wrongLetters;

/*----- cached element references -----*/
const guessEl = document.getElementById('guess');
const letterBtns = document.querySelectorAll('#letters > button');

/*----- event listeners -----*/
document.getElementById('letters')
  .addEventListener('click', handleLetterClick);

/*----- functions -----*/
init();

function isGameOver() {
  return (
    secretWord === guessWord ||
    wrongLetters.length === WRONG_GUESS_HUNG_COUNT
  );
}

function handleLetterClick(evt) {
  let letter = evt.target.textContent;
  if (
    evt.target.tagName !== 'BUTTON' ||
    // check if letter is in the usedLetters array
    usedLetters.includes(letter) ||
    isGameOver()
  ) return;
  usedLetters.push(letter);
  if (secretWord.includes(letter)) {
    // Good guess!
    let newGuessWord = '';
    for (let i = 0; i < secretWord.length; i++) {
      newGuessWord += secretWord.charAt(i) === letter  ? letter : guessWord.charAt(i);
    }
    guessWord = newGuessWord;
  } else {
    // Bogus guess :(
    wrongLetters.push(letter);
  }

  render();
}

function render() {
  // render guessWord
  guessEl.textContent = guessWord;
  // render the buttons
  letterBtns.forEach(function(btn) {
    let letter = btn.textContent;
    if (wrongLetters.includes(letter)) {
      btn.className = 'wrong';
    } else if (usedLetters.includes(letter)) {
      btn.className = 'correct';
    } else {
      btn.className = '';
    }
  });
}

function init() {
  let rndIdx = Math.floor(Math.random() * WORDS.length);
  secretWord = WORDS[rndIdx];
  guessWord = '';
  for (let char of secretWord) {
    guessWord += char === ' ' ? ' ' : '_';
  }
  usedLetters = [];
  wrongLetters = [];
  render();
}