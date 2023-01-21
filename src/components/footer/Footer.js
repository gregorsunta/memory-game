import React from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;

  padding: 1rem;
  background-color: ${MAIN.INDIGO_1};
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © gregorsunta</p>
    </StyledFooter>
  );
};

export default Footer;
