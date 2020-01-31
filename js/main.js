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
  console.dir(evt.target)
}

function render() {
  // render guessWord
  guessEl.textContent = guessWord;
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