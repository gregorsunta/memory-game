import React from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';

const StyledEndScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border-radius: 0.5rem;
  padding: 3rem;

  background-color: ${MAIN.INDIGO_2};
`;

const StyledScore = styled.p`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  font-size: 3rem;
  background-color: ${MAIN.INDIGO_2};
`;
const StyledMessage = styled.p`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  font-size: 4rem;
`;
const StyledButton = styled.button`
  padding: 1rem;
  font-size: 2rem;
`;

const EndScreen = ({ score, message, resetGame }) => {
  return (
    <StyledEndScreen>
      <StyledMessage>{message}</StyledMessage>
      <StyledScore>You scored: {score}</StyledScore>
      <StyledButton onClick={resetGame}>
        Play again!
      </StyledButton>
    </StyledEndScreen>
  );
};

export default EndScreen;
