import React, { useEffect, useState } from 'react';
import cardCollection from '../api/cardCollection';
import uniqid from 'uniqid';

const useCards = (level) => {
  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const updateCards = async (level) => {
    setIsLoading(true);
    const newCards = await cardCollection.fetchCards(level);
    setCards(
      newCards.map((card) => {
        return {
          ...card,
          id: uniqid(),
          isClicked: false,
        };
      }),
    );
    setIsLoading(false);
  };
  const shuffleCards = () => {
    const arr = [...cards];
    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(
        Math.random() * currentIndex,
      );
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    setCards(arr);
  };
  return [cards, updateCards, shuffleCards, isLoading];
};

export default useCards;
