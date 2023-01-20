import React from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';
import Logo from './Logo';
import Scoreboard from './Scoreboard';

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  background-color: ${MAIN.INDIGO_1};
`;

const Header = () => {
  return (
    <HeaderEl>
      <Logo />
      <Scoreboard />
    </HeaderEl>
  );
};

export default Header;
