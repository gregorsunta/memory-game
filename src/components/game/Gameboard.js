import React, { useEffect, useState } from 'react';
import Card from './Card';
import CardDeck from './CardDeck';
import useCards from '../customHooks/useCards';
import EndScreen from './EndScreen';

const levels = new Map([
  [1, { numberOfCards: 5, range: [0, 50] }],
  [2, { numberOfCards: 6, range: [50, 100] }],
  [3, { numberOfCards: 7, range: [100, 150] }],
]);

const Gameboard = function () {
  const [level, setLevel] = useState(1);
  const [hasEnded, setHasEnded] = useState(false);
  const [cards, fetchCards, setCards, isLoading] =
    useCards(null);
  const [stats, setStats] = useState(null);

  const fetchNewCards = () => {
    fetchCards(levels.get(level));
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
  const incrementLevel = () => {
    setLevel(level + 1);
  };
  const handleClick = (card) => {
    card.isClicked = true;
    console.log(cards);
    // shuffleCards();
  };
  return (
    <div>
      <button onClick={incrementLevel}>Level up</button>
      <div>Current level:{level}</div>
      <button onClick={fetchNewCards}>
        fetch new cards
      </button>
      {/* {console.log(cards)} */}
      <CardDeck
        cards={cards}
        hidden={!hasEnded}
        handleClick={handleClick}
      />
      <button onClick={shuffleCards}>shuffle cards</button>
      <EndScreen hasEnded={hasEnded} />
    </div>
  );
};
export default Gameboard;
