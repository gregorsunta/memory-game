import React from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${MAIN.INDIGO_7};
  letter-spacing: -2px;
`;
const Logo = () => {
  return <StyledLogo>POKE MY MEMORY</StyledLogo>;
};

export default Logo;
