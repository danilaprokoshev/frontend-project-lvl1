import promptly from 'promptly';

export default async (game) => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(game.gameDescription);
  const rightAnswersToWin = 3;
  for (let counterRightAnswer = 0; counterRightAnswer < rightAnswersToWin;
    counterRightAnswer += 1) {
    const question = game.getQuestion();
    const correctAnswer = game.getCorrectAnswer(question);
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return 0;
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
