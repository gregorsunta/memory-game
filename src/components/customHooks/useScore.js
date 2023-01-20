import React, { useState } from 'react';

const useScore = () => {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const incrementScore = () => {
    setScore(score + 1);
    if (score > highestScore) {
      setHighestScore(score);
    }
  };
  const resetScore = () => {
    setScore(0);
  };
  return [score, highestScore, incrementScore, resetScore];
};

export default useScore;
