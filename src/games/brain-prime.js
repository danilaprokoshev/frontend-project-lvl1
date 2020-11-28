import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const START_NUMBER = 2;
const FINISH_NUMBER = 3571;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const getQuestion = () => generateNumber(START_NUMBER, FINISH_NUMBER);

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const startGame = () => quizGame(gameDescription, getQuestion, getCorrectAnswer);

export {
  gameDescription, getQuestion, getCorrectAnswer, startGame,
};
