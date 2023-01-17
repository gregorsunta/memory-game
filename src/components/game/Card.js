import React, { useState } from 'react';
import styled from 'styled-components';
import useFetchData from './customHooks/useFetchData';

const Container = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;
const Img = styled.img`
  width: 500px;
  height: 500px;
`;
const Card = ({ id }) => {
  const { data } = useFetchData(id);

  return (
    <Container>
      {<Img src={data?.sprites.other.dream_world.front_default} alt="" />}
    </Container>
  );
};
export default Card;
