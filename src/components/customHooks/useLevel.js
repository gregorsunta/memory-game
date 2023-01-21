import React, { useEffect, useState } from 'react';

const levels = new Map([
  [1, { index: 1, numberOfCards: 2, range: [0, 50] }],
  [2, { index: 2, numberOfCards: 6, range: [50, 100] }],
  [3, { index: 3, numberOfCards: 7, range: [100, 150] }],
  [4, { index: 4, numberOfCards: 9, range: [150, 200] }],
  [5, { index: 5, numberOfCards: 11, range: [200, 300] }],
  [6, { index: 6, numberOfCards: 14, range: [300, 400] }],
  [7, { index: 7, numberOfCards: 17, range: [400, 500] }],
  [8, { index: 8, numberOfCards: 20, range: [500, 700] }],
  [9, { index: 9, numberOfCards: 25, range: [700, 900] }],
]);

const useLevel = () => {
  const [level, setLevel] = useState(levels.get(1));
  const [isLastLevel, setIsLastLevel] = useState(false);

  const nextLevel = () => {
    setLevel(levels.get(level.index + 1));
  };
  const checkIfLastLevel = () => {
    if (!levels.get(level.index + 1)) {
      setIsLastLevel(true);
    }
  };
  const resetLevel = () => {
    console.log(levels.get(1));

    setLevel({
      index: 1,
      numberOfCards: 5,
      range: [0, 50],
    });
  };
  return [
    level,
    isLastLevel,
    nextLevel,
    resetLevel,
    checkIfLastLevel,
  ];
};

export default useLevel;
