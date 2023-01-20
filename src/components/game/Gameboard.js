import React, { useEffect, useState } from 'react';
import Card from './Card';
import CardDeck from './CardDeck';
import useCards from '../customHooks/useCards';
import EndScreen from './EndScreen';
import styled from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const levels = new Map([
  [1, { numberOfCards: 5, range: [0, 50] }],
  [2, { numberOfCards: 6, range: [50, 100] }],
  [3, { numberOfCards: 7, range: [100, 150] }],
  [4, { numberOfCards: 9, range: [150, 200] }],
  [5, { numberOfCards: 11, range: [200, 300] }],
  [6, { numberOfCards: 14, range: [300, 400] }],
  [7, { numberOfCards: 17, range: [400, 500] }],
  [8, { numberOfCards: 20, range: [500, 700] }],
  [9, { numberOfCards: 20, range: [700, 900] }],
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
    <StyledBoard>
      <button onClick={incrementLevel}>Level up</button>
      <div>Current level:{level}</div>
      <button onClick={fetchNewCards}>
        fetch new cards
      </button>
      <button onClick={shuffleCards}>shuffle cards</button>
      {/* {console.log(cards)} */}
      <CardDeck
        cards={cards}
        hidden={!hasEnded}
        handleClick={handleClick}
      />
      {/* <EndScreen hasEnded={hasEnded} /> */}
    </StyledBoard>
  );
};
export default Gameboard;
