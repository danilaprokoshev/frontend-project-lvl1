import generateNumber from '../src/generating-numbers.js';

const START_NUMBER = 0;
const FINISH_NUMBER = 100;

const greeting = () => 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstNumber = generateNumber(START_NUMBER, FINISH_NUMBER);
  const secondNumber = generateNumber(START_NUMBER, FINISH_NUMBER);

  return `${firstNumber} ${secondNumber}`;
};

const getCorrectAnswer = (question) => {
  const [firstNumber, secondNumber] = question.split(' ');
  const firstNumberAsNum = Number(firstNumber);
  const secondNumberAsNum = Number(secondNumber);
  let gcd = 1;
  for (let divisor = 2; divisor <= Math.max(firstNumberAsNum, secondNumberAsNum); divisor += 1) {
    if (firstNumberAsNum % divisor === 0 && secondNumberAsNum % divisor === 0) {
      gcd = divisor;
    }
  }

  return String(gcd);
};

export { greeting, getQuestion, getCorrectAnswer };
