import generateNumber from '../src/generating-numbers.js';

const START_NUMBER = 0;
const FINISH_NUMBER = 100;
const START_INDEX = 0;
const FINISH_INDEX = 2;

const greeting = () => 'What is the result of the expression?';

const getQuestion = () => {
  const operators = ['+', '-', '*'];
  const firstOperand = generateNumber(START_NUMBER, FINISH_NUMBER);
  const secondOperand = generateNumber(START_NUMBER, FINISH_NUMBER);
  const opIndex = generateNumber(START_INDEX, FINISH_INDEX);

  return `${firstOperand} ${operators[opIndex]} ${secondOperand}`;
};

const getCorrectAnswer = (question) => {
  let correctAnswer = 0;
  const [firstOperand, operator, secondOperand] = question.split(' ');
  const firstOperandAsNum = Number(firstOperand);
  const secondOperandAsNum = Number(secondOperand);
  switch (operator) {
    case '+':
      correctAnswer = firstOperandAsNum + secondOperandAsNum;
      break;
    case '-':
      correctAnswer = firstOperandAsNum - secondOperandAsNum;
      break;
    case '*':
      correctAnswer = firstOperandAsNum * secondOperandAsNum;
      break;
    default:
  }

  return String(correctAnswer);
};

export { greeting, getQuestion, getCorrectAnswer };
