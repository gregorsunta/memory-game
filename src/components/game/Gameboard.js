import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import useFetchData from './customHooks/useFetchData';

const Container = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const Gameboard = ({ range }) => {
  const generateRandomIds = () => {
    const [start, end] = range;
  };
  return (
    <Container>
      {ids.map((id) => {
        <Card id={id} />;
      })}
    </Container>
  );
};
export default Gameboard;
