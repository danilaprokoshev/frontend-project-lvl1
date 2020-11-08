import promptly from 'promptly';

export default async () => {
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
