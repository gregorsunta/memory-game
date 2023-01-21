import React, { useEffect } from 'react';
import styled from 'styled-components';
import useGame from '../customHooks/useGame';
import Scoreboard from '../header/Scoreboard';
import CardDeck from './CardDeck';
import EndScreen from './EndScreen';

const StyledGame = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const StyledP = styled.p`
  padding: 1rem;
  font-size: 2rem;
`;

const Game = ({
  cards,
  level,
  score,
  highestScore,
  hasEnded,
  hasDefeated,
  handleClick,
  startLevel,
  resetGame,
}) => {
  return (
    <StyledGame>
      <StyledP>Level: {level.index}</StyledP>

      {!hasEnded && (
        <CardDeck cards={cards} handleClick={handleClick} />
      )}
      {hasEnded && (
        <EndScreen
          score={score}
          message={
            hasDefeated
              ? 'You have defeated the game, congratulations!'
              : 'DEFEAT'
          }
          resetGame={resetGame}
        />
      )}
    </StyledGame>
  );
};

export default Game;
