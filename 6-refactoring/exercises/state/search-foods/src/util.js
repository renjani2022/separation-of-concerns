/**
 *
 */
export const search = () => {
  // execute core logic
  const results = data.foods
    .filter((food) => food.includes(query))
    .map((food) => `\n- ${food}`)
    .join('');
};
