import React from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';

const StyledP = styled.p`
  padding: 1rem;
  border-radius: 0.5rem;

  font-size: 3rem;
  background-color: ${MAIN.INDIGO_2};
`;

const EndScreen = ({ score }) => {
  return (
    <div>
      <StyledP>You scored: {score}</StyledP>
    </div>
  );
};

export default EndScreen;
