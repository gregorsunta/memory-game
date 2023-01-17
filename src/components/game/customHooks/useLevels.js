import getRandomIds from './getRandomIds';

const useLevels = (level) => {
  const levelsInfo = [
    { numberOfCards: 5, range: [0, 50] },
    { numberOfCards: 6, range: [50, 100] },
    { numberOfCards: 7, range: [100, 150] },
  ];

  return [levelsInfo[level], levelsInfo];
};
export default useLevels;
