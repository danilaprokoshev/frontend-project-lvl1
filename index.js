import promptly from 'promptly';

export const brainEven = async () => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countRightAnswers = 0;
  let correctAnswer = '';
  while (countRightAnswers < 3) {
    const arbitraryNumber = Math.round(Math.random() * 100);
    if (arbitraryNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
    console.log(`Question: ${arbitraryNumber}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`, '\n', `Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};

export const brainCalc = async () => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);
    const opIndex = Math.floor(Math.random() * 3);
    let correctAnswer = 0;
    switch (operators[opIndex]) {
      case '+':
        correctAnswer = firstOperand + secondOperand;
        break;
      case '-':
        correctAnswer = firstOperand - secondOperand;
        break;
      case '*':
        correctAnswer = firstOperand * secondOperand;
        break;
      default:
    }
    console.log(`Question: ${firstOperand} ${operators[opIndex]} ${secondOperand}`);
    const answer = await promptly.prompt('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`, '\n', `Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};

export const brainGcd = async () => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    let gcd = 1;
    for (let divisor = 2; divisor <= Math.max(firstNumber, secondNumber); divisor += 1) {
      if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
        gcd = divisor;
      }
    }
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = await promptly.prompt('Your answer: ');
    if (Number(answer) === gcd) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.`, '\n', `Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
