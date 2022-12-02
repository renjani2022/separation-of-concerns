import { typeCaster } from './util.js';

export const castTheValue = (event) => {
  // read & process user input
  const form = event.target.form;
  const intendedType = form.type.value;
  const stringToCast = form.value.value;

  const newValue = typeCaster(stringToCast, intendedType);

  // communicate result to user
  document.getElementById('casted-value').innerHTML =
    typeof newValue + ': ' + newValue;
};
