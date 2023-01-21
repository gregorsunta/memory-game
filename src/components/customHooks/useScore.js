import React, { useState } from 'react';

const useScore = () => {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const incrementScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > highestScore) {
      setHighestScore(newScore);
    }
  };
  const resetScore = () => {
    setScore(0);
  };
  return [score, highestScore, incrementScore, resetScore];
};

export default useScore;
