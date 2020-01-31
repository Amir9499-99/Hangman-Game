/*----- constants -----*/
const WORDS = [
  'DEVELOPER', 'ENGINEER', 'NODE', 'JAVASCRIPT',
  'CODING', 'HTML', 'BACK END', 'GUI', 'BOOLEAN',
  'REACT', 'FUNCTION', 'COMPUTER SCIENCE',
  'SEPARATION OF CONCERNS'
];

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

function handleLetterClick(evt) {
  if (evt.target.tagName !== 'BUTTON') return;
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