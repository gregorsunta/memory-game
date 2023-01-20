import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  padding: 1rem;
  border-radius: 1rem;

  background-color: white;
  width: 5rem;
  height: 5rem;
`;

const Card = ({ img, handleClick }) => {
  return <>{<Img src={img} alt="" onClick={handleClick} />}</>;
};
export default Card;
