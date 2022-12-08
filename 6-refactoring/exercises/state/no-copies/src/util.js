/**
 *
 */
export const saveNoCopies = (Array, userInput) => {
  const data = {
    noCopies: Array,
  };

  // execute core logic
  const alreadySaved = data.noCopies.includes(userInput);
  if (!alreadySaved) {
    data.noCopies.push(userInput);
  }
  return data.noCopies;
};
