import React from 'react';
import styled from 'styled-components';

const StyledScoreboard = styled.div``;
const P = styled.p``;
const Scoreboard = ({ level, score }) => {
  return (
    <StyledScoreboard>
      <P>Level: {level}</P>
      <P>Current score:{score}</P>
    </StyledScoreboard>
  );
};

export default Scoreboard;
