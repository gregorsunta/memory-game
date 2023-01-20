import React, { useEffect } from 'react';
import styled from 'styled-components';
import useGame from '../customHooks/useGame';
import Scoreboard from '../header/Scoreboard';
import CardDeck from './CardDeck';
import EndScreen from './EndScreen';

const StyledGame = styled.div`
  min-height: 100vh;
`;

const Game = ({ hasEnded, score, cards, handleClick }) => {
  return (
    <StyledGame>
      {hasEnded ? (
        <EndScreen score={score} />
      ) : (
        <CardDeck cards={cards} handleClick={handleClick} />
      )}
    </StyledGame>
  );
};

export default Game;
