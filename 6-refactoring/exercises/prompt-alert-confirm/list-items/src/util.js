/**
 *
 */
export const list = (allInputs) => {
  // execute core logic
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n- ${input}`;
  }
  return stringList;
};
