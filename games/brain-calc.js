import promptly from 'promptly';

export default async () => {
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
