import React, { useState } from 'react';
import styled from 'styled-components';
import { MAIN } from '../../stylesheets/variables';

const Img = styled.img`
  padding: 1rem;
  border: 0.1rem solid ${MAIN.GRAY_9};
  border-radius: 0.3rem;

  background-color: ${MAIN.INDIGO_1};
  width: 10rem;
  height: 10rem;
`;

const Card = ({ img, handleClick }) => {
  return (
    <>{<Img src={img} alt="" onClick={handleClick} />}</>
  );
};
export default Card;
