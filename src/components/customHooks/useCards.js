import React, { useState } from 'react';
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
        return { ...card, id: uniqid() };
      }),
    );
    setIsLoading(false);
  };
  const setCustomCards = (cards) => setCards(cards);
  return [cards, updateCards, setCustomCards, isLoading];
};

export default useCards;
