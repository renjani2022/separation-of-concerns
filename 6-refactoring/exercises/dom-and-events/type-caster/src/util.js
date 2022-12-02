/**
 *
 */
export const typeCaster = (stringToCast, intendedType) => {
  // execute core logic
  let newValue;
  if (intendedType === 'string') {
    newValue = String(stringToCast);
  } else if (intendedType === 'number') {
    newValue = Number(stringToCast);
  } else if (intendedType === 'boolean') {
    newValue = Boolean(stringToCast);
  } else {
    newValue = undefined;
  }
  return newValue;
};
