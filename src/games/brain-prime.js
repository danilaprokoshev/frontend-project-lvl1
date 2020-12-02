import quizGame from '../index.js';
import generateNumber from '../generating-numbers.js';

const START_NUMBER = 2;
const FINISH_NUMBER = 3571;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const getQuestionAndAnswer = () => {
  const question = generateNumber(START_NUMBER, FINISH_NUMBER);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => quizGame(gameDescription, getQuestionAndAnswer);
