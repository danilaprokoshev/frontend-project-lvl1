const GREETING = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstNumber = Math.round(Math.random() * 100);
  const secondNumber = Math.round(Math.random() * 100);

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

export { GREETING, getQuestion, getCorrectAnswer };
