const GREETING = 'What is the result of the expression?';

const getQuestion = () => {
  const operators = ['+', '-', '*'];
  const firstOperand = Math.round(Math.random() * 100);
  const secondOperand = Math.round(Math.random() * 100);
  const opIndex = Math.floor(Math.random() * 3);

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

export { GREETING, getQuestion, getCorrectAnswer };
