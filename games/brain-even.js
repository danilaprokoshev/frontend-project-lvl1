const GREETING = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => Math.round(Math.random() * 100);

const getCorrectAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');

export { GREETING, getQuestion, getCorrectAnswer };
