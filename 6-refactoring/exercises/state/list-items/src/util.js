/**
 *
 */
export const list = (allInputs, bulletPoint) => {
  //const bulletPoint = '*'; // data to refactor out of this file

  // execute core logic
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n${bulletPoint} ${input}`;
  }
  return stringList;
};
