import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const START_NUMBER = 0;
const FINISH_NUMBER = 100;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => generateNumber(START_NUMBER, FINISH_NUMBER);

const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const startGame = () => quizGame(gameDescription, getQuestion, getCorrectAnswer);

export {
  gameDescription, getQuestion, getCorrectAnswer, startGame,
};
