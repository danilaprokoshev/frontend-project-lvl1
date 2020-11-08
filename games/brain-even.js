import promptly from 'promptly';

export default async () => {
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
