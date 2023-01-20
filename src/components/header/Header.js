import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';
import Logo from './Logo';
import Scoreboard from './Scoreboard';
import useGame from 'components/customHooks/useGame';

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  background-color: ${MAIN.INDIGO_1};
`;

const Header = ({ score, highestScore }) => {
  return (
    <HeaderEl>
      <Logo />
      <Scoreboard
        score={score}
        highestScore={highestScore}
      />
    </HeaderEl>
  );
};

export default Header;
