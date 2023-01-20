import React, { useState } from 'react';
import useCards from './useCards';
import useLevel from './useLevel';
import useScore from './useScore';

const useGame = () => {
  const [level, nextLevel, resetLevel] = useLevel();
  const [score, highestScore, incrementScore, resetScore] =
    useScore();
  const [cards, updateCards, shuffleCards, isLoading] =
    useCards();
  const [hasEnded, setHasEnded] = useState(false);
  const [isLastLevel, setIsLastLevel] = useState(false);

  const isLevelCleared = () => {
    return cards.every((card) => card.isClicked);
  };
  const handleClick = (card) => {
    if (card.isClicked) {
      setHasEnded(true);
    } else {
      card.isClicked = true;
      incrementScore();
      if (isLevelCleared() && isLastLevel) {
        setHasEnded(true);
      } else if (isLevelCleared()) {
        nextLevel();
      } else {
        shuffleCards();
      }
    }
  };
  const startLevel = () => {
    updateCards(level);
  };
  return [
    cards,
    level,
    score,
    highestScore,
    hasEnded,
    handleClick,
    startLevel,
  ];
};

export default useGame;
