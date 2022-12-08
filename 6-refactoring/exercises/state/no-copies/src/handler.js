<<<<<<< HEAD
import { saveNoCopies } from './util.js';
import { data } from './data/state.js';
=======
import { saveNoCopies } from './utils.js';
import { state } from '../data/state.js';
>>>>>>> ade7b95316aed00b00fa2af13fab08aaba852ff8

export const saveNoCopiesHandler = () => {
  // read & process user input
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to save');
  }

  const alreadySaved = saveNoCopies(arg, data);

  // communicate result to user
  const message = data.noCopies.join(', ');
  alert(message);

  // log interaction
  console.log(data);
};
