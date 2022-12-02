// import { reverseAndUpper } from './utils.js';

export const reverseAndUpperHandler = (event) => {
  const input = event.target.value;

  const reversedUppercase = reversedAndUpper(input);

  document.getElementById('output').innerHTML = reversedUppercase;
};
