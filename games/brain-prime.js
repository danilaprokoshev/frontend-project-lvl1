const GREETING = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const START_INT = 2;
const FINISH_INT = 3571;

function isPrime(number) {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const getQuestion = () => Math.round(Math.random() * (FINISH_INT - START_INT) + START_INT);

const getCorrectAnswer = (question) => {
  let correctAnswer = '';
  if (isPrime(question)) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  return correctAnswer;
};

export { GREETING, getQuestion, getCorrectAnswer };
