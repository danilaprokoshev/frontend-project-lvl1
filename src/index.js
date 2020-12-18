import promptly from 'promptly';

const CORRECT_ANSWERS_FOR_SUCCESS = 3;

export default async (gameDescription, getQuestionAndAnswer) => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let counterRightAnswer = 0; counterRightAnswer < CORRECT_ANSWERS_FOR_SUCCESS;) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counterRightAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
