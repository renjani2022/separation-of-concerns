import { formatCoordinates, formatCoordinates } from './util.js';

export const showMouseCoordinates = (event) => {
  //read & process user input
  const xValue = event.pageX;
  const yValue = event.pageY;

  const formatCoordinates = formatCoordinates(xValue, yValue);
  //render result for user
  document.getElementById('mouse-position').innerHTML = formattedCoordinates;
};
