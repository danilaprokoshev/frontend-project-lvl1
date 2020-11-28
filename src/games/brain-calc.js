import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const START_NUMBER = 0;
const FINISH_NUMBER = 100;
const START_INDEX = 0;
const FINISH_INDEX = 2;

const gameDescription = 'What is the result of the expression?';

const getQuestion = () => {
  const operators = ['+', '-', '*'];
  const firstOperand = generateNumber(START_NUMBER, FINISH_NUMBER);
  const secondOperand = generateNumber(START_NUMBER, FINISH_NUMBER);
  const opIndex = generateNumber(START_INDEX, FINISH_INDEX);

  return `${firstOperand} ${operators[opIndex]} ${secondOperand}`;
};

const calculate = (firstOperand, operator, secondOperand) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
  }

  return result;
};

const getCorrectAnswer = (question) => {
  const [firstOperand, operator, secondOperand] = question
    .split(' ')
    .map((el, i) => {
      if (i === 0 || i === 2) {
        return Number(el);
      }

      return el;
    });

  return String(calculate(firstOperand, operator, secondOperand));
};

const startGame = () => quizGame(gameDescription, getQuestion, getCorrectAnswer);

export {
  gameDescription, getQuestion, getCorrectAnswer, startGame,
};
