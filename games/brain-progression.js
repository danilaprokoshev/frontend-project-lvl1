import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const progLength = Math.round(Math.random() * (10 - 5) + 5);
    const step = Math.round(Math.random() * (5 - 2) + 2);
    const posOfHiddenElement = Math.floor(Math.random() * progLength);
    let startElement = Math.round(Math.random() * 50);
    const coll = [];
    let correctAnswer = 0;
    for (let i = 0; i < progLength; i += 1) {
      coll.push(startElement);
      startElement += step;
    }
    correctAnswer = coll[posOfHiddenElement];
    coll[posOfHiddenElement] = '..';
    console.log(`Question: ${coll.join(' ')}`);
    const answer = await promptly.prompt('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`, '\n', `Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};
