const getRandomIds = (numberOfCards, range) => {
  const generateRandomIds = (numberOfCards, range) => {
    let ids = [];
    const generateRandomId = () => {
      const [min, max] = range;
      return Math.floor(Math.random() * (max - min) + min);
    };
    while (numberOfCards) {
      const randomId = generateRandomId(range);
      if (!ids.includes(randomId)) {
        ids.push(randomId);
        numberOfCards--;
      }
    }
    return ids;
  };
  const ids = generateRandomIds(numberOfCards, range);
  return ids;
};
export default getRandomIds;
