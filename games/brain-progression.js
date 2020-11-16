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
  const coll = question.split(' ');
  const posOfHiddenElement = coll.indexOf('..');
  const collAsNum = coll.map((x) => Number(x));
  let correctAnswer = 0;
  let step = 0;
  if (posOfHiddenElement >= 0 && posOfHiddenElement < collAsNum.length - 2) {
    step = collAsNum[posOfHiddenElement + 2] - collAsNum[posOfHiddenElement + 1];
    correctAnswer = collAsNum[posOfHiddenElement + 1] - step;
  } else {
    step = collAsNum[posOfHiddenElement - 1] - collAsNum[posOfHiddenElement - 2];
    correctAnswer = collAsNum[posOfHiddenElement - 1] + step;
  }

  return String(correctAnswer);
};

export { GREETING, getQuestion, getCorrectAnswer };
