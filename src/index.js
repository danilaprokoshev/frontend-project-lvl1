import promptly from 'promptly';

export default async (game) => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(game.GREETING);
  for (let i = 0; i < 3; i += 1) {
    const question = game.getQuestion();
    const correctAnswer = game.getCorrectAnswer(question);
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`, '\n', `Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
