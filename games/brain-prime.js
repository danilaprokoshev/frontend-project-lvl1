import promptly from 'promptly';

export default async () => {
  function isPrime(number) {
    for (let i = 2; i < number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    let correctAnswer = '';
    const arbitraryNumber = Math.round(Math.random() * (3571 - 2) + 2);
    if (isPrime(arbitraryNumber)) {
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
