import promptly from 'promptly';

export default async (gameDescription, getQuestion, getCorrectAnswer) => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  let counterRightAnswer = 0;
  do {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counterRightAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (counterRightAnswer === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  } while (counterRightAnswer <= 3);
};
