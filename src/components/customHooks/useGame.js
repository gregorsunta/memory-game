import React, { useEffect, useState } from 'react';
import useCards from './useCards';
import useLevel from './useLevel';
import useScore from './useScore';

const useGame = () => {
  const [
    level,
    isLastLevel,
    nextLevel,
    resetLevel,
    checkIfLastLevel,
  ] = useLevel();
  const [score, highestScore, incrementScore, resetScore] =
    useScore();
  const [cards, updateCards, shuffleCards, isLoading] =
    useCards();
  const [hasEnded, setHasEnded] = useState(false);
  const [hasDefeated, setHasDefeated] = useState(false);

  const isLevelCleared = () => {
    return cards.every((card) => card.isClicked);
  };
  const handleClick = (card) => {
    if (card.isClicked) {
      setHasEnded(true);
    } else {
      card.isClicked = true;
      checkIfLastLevel();
      incrementScore();
      if (isLevelCleared() && isLastLevel) {
        setHasEnded(true);
        setHasDefeated(true);
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
  const resetGame = () => {
    resetLevel();
    resetScore();
    setHasEnded(false);
    setHasDefeated(false);
  };

  return [
    cards,
    level,
    score,
    highestScore,
    hasEnded,
    hasDefeated,
    handleClick,
    startLevel,
    resetGame,
  ];
};

export default useGame;
