const GREETING = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const question = Math.round(Math.random() * 100);

  return question;
};

const getCorrectAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');

export { GREETING, getQuestion, getCorrectAnswer };
