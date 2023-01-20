import React from 'react';
import styled from 'styled-components';

const StyledScoreboard = styled.div``;
const P = styled.p``;
const Scoreboard = ({ score, highestScore }) => {
  return (
    <StyledScoreboard>
      <P>Highest score: {highestScore}</P>
      <P>Current score: {score}</P>
    </StyledScoreboard>
  );
};

export default Scoreboard;
