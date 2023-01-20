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
  &:hover {
    background-color: ${MAIN.INDIGO_2};
  }
  &:active {
    background-color: ${MAIN.INDIGO_3};
  }
`;

const Card = ({ card, img, handleClick }) => {
  return (
    <>
      {
        <Img
          src={img}
          alt=""
          onClick={handleClick.bind(this, card)}
        />
      }
    </>
  );
};
export default Card;
