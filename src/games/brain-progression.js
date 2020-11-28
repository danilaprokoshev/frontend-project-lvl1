import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const MIN_PROGR_LENGTH = 5;
const MAX_PROGR_LENGTH = 10;

const MIN_STEP = 2;
const MAX_STEP = 5;

const START_FROM = 0;
const START_TO = 50;

let hiddenElement = 0;

const gameDescription = 'What number is missing in the progression?';

const getProgression = (progrLength, step, firstElement) => {
  const progression = [];
  let element = firstElement;
  for (let i = 0; i < progrLength; i += 1) {
    progression.push(element);
    element += step;
  }
  // progression[indexOfHiddenElement] = '..';

  return progression;
};

const getQuestion = () => {
  const progrLength = generateNumber(MIN_PROGR_LENGTH, MAX_PROGR_LENGTH);
  const step = generateNumber(MIN_STEP, MAX_STEP);
  const startIndex = 0;
  const finishIndex = progrLength - 1;
  const indexOfHiddenElement = generateNumber(startIndex, finishIndex);
  const firstElement = generateNumber(START_FROM, START_TO);

  const progression = getProgression(progrLength, step, firstElement);
  hiddenElement = progression[indexOfHiddenElement];
  progression[indexOfHiddenElement] = '..';

  return `${progression.join(' ')}`;
};

const getCorrectAnswer = () => String(hiddenElement);

const startGame = () => quizGame(gameDescription, getQuestion, getCorrectAnswer);

export {
  gameDescription, getQuestion, getCorrectAnswer, startGame,
};
