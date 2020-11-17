import generateNumber from '../src/generating-numbers.js';

const MIN_PROGR_LENGTH = 5;
const MAX_PROGR_LENGTH = 10;

const MIN_STEP = 2;
const MAX_STEP = 5;

const START_FROM = 0;
const START_TO = 50;

const gameDescription = 'What number is missing in the progression?';

const getQuestion = () => {
  const progrLength = generateNumber(MIN_PROGR_LENGTH, MAX_PROGR_LENGTH);
  const step = generateNumber(MIN_STEP, MAX_STEP);
  const startIndex = 0;
  const finishIndex = progrLength - 1;
  const indexOfHiddenElement = generateNumber(startIndex, finishIndex);
  let element = generateNumber(START_FROM, START_TO);
  const coll = [];
  for (let i = 0; i < progrLength; i += 1) {
    coll.push(element);
    element += step;
  }
  coll[indexOfHiddenElement] = '..';

  return `${coll.join(' ')}`;
};

const getCorrectAnswer = (question) => {
  const coll = question.split(' ');
  const indexOfHiddenElement = coll.indexOf('..');
  const collAsNum = coll.map(Number);
  let correctAnswer = 0;
  let step = 0;
  if (indexOfHiddenElement >= 0 && indexOfHiddenElement < collAsNum.length - 2) {
    step = collAsNum[indexOfHiddenElement + 2] - collAsNum[indexOfHiddenElement + 1];
    correctAnswer = collAsNum[indexOfHiddenElement + 1] - step;
  } else {
    step = collAsNum[indexOfHiddenElement - 1] - collAsNum[indexOfHiddenElement - 2];
    correctAnswer = collAsNum[indexOfHiddenElement - 1] + step;
  }

  return String(correctAnswer);
};

export { gameDescription, getQuestion, getCorrectAnswer };
