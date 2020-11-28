import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const START_NUMBER = 0;
const FINISH_NUMBER = 100;

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstNumber = generateNumber(START_NUMBER, FINISH_NUMBER);
  const secondNumber = generateNumber(START_NUMBER, FINISH_NUMBER);

  return `${firstNumber} ${secondNumber}`;
};

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let gcd = 1;
  for (let divisor = 2; divisor <= Math.max(firstNumber, secondNumber); divisor += 1) {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      gcd = divisor;
    }
  }

  return gcd;
};

const getCorrectAnswer = (question) => {
  const [firstNumber, secondNumber] = question
    .split(' ')
    .map(Number);

  return String(getGreatestCommonDivisor(firstNumber, secondNumber));
};

const startGame = () => quizGame(gameDescription, getQuestion, getCorrectAnswer);

export {
  gameDescription, getQuestion, getCorrectAnswer, startGame,
};
