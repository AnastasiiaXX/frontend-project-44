import getRandomNumber from '../utils.js';
import startGameCycle from '../index.js';

const gameRules = 'What is the result of the expression?';

const getOperator = () => {
  const mathOperators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, mathOperators.length - 1);
  return mathOperators[operatorIndex];
};

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return Error('Operator is invalid');
  }
};
console.log(calculate('+', 45, 11));

const startTheRound = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(operator, num1, num2));
  return [question, answer];
};

export default () => {
  startGameCycle(gameRules, startTheRound);
};
