import getRandomNumber from '../utils.js';
import startGameCycle from '../index.js';

const gameRules = 'What number is missing in the progression?';

const createProgression = () => {
  const numberToBegin = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(numberToBegin + i * difference);
  }
  return progression;
};

const startTheRound = () => {
  const progression = createProgression();
  const numberToGuess = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[numberToGuess]);
  progression[numberToGuess] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  startGameCycle(gameRules, startTheRound);
};
