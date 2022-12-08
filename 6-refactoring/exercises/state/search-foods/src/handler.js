<<<<<<< HEAD
import { search } from './util.js';
import { state } from '../data/state.js';

export const searchFoodsHandler = () => {
  // read & process user input
  const query = prompt('enter a search query');
  if (query === null || query === '') {
    return;
  }

  // execute core logic
  const results = data.foods
    .filter((food) => food.includes(query))
    .map((food) => `\n- ${food}`)
    .join('');

  // communicate result to user
  const message = `foods matching "${query}":${results}`;
  alert(message);

  // log the interaction
  console.log(query);
};
=======
import { search } from './utils.js';
import { state } from '../data/state.js';

export const searchFoodsHandler = () => {};
>>>>>>> ade7b95316aed00b00fa2af13fab08aaba852ff8
