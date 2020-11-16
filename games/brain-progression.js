const GREETING = 'What number is missing in the progression?';
const MAX_PROGLENGTH = 10;
const MIN_PROGLENGTH = 5;
const MAX_STEP = 5;
const MIN_STEP = 2;
const START_ELEMENT_INTERVAL = 50;

const getQuestion = () => {
  const progLength = Math.round(Math.random() * (MAX_PROGLENGTH - MIN_PROGLENGTH) + MIN_PROGLENGTH);
  const step = Math.round(Math.random() * (MAX_STEP - MIN_STEP) + MIN_STEP);
  const posOfHiddenElement = Math.floor(Math.random() * progLength);
  let startElement = Math.round(Math.random() * START_ELEMENT_INTERVAL);
  const coll = [];
  for (let i = 0; i < progLength; i += 1) {
    coll.push(startElement);
    startElement += step;
  }
  coll[posOfHiddenElement] = '..';

  return `${coll.join(' ')}`;
};

const getCorrectAnswer = (question) => {
  let correctAnswer = 0;
  let step = 0;
  const coll = question.split(' ');
  const posOfHiddenElement = coll.indexOf('..');
  if (posOfHiddenElement >= 0 && posOfHiddenElement < coll.length - 2) {
    step = Number(coll[posOfHiddenElement + 2]) - Number(coll[posOfHiddenElement + 1]);
    correctAnswer = Number(coll[posOfHiddenElement + 1]) - step;
  } else {
    step = Number(coll[posOfHiddenElement - 1]) - Number(coll[posOfHiddenElement - 2]);
    correctAnswer = Number(coll[posOfHiddenElement - 1]) + step;
  }

  return String(correctAnswer);
};

export { GREETING, getQuestion, getCorrectAnswer };
