import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const START_NUMBER = 0;
const FINISH_NUMBER = 100;
const START_INDEX = 0;
const FINISH_INDEX = 2;

const gameDescription = 'What is the result of the expression?';

const calculate = (firstOperand, operator, secondOperand) => {
  let result;
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

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstOperand = generateNumber(START_NUMBER, FINISH_NUMBER);
  const secondOperand = generateNumber(START_NUMBER, FINISH_NUMBER);
  const opIndex = generateNumber(START_INDEX, FINISH_INDEX);
  const operator = operators[opIndex];

  const question = [firstOperand, operator, secondOperand].join(' ');
  const correctAnswer = calculate(firstOperand, operator, secondOperand).toString();

  return [question, correctAnswer];
};

export default () => quizGame(gameDescription, getQuestionAndAnswer);
