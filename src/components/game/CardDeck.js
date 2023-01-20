import React from 'react';
import Card from './Card';
import useCards from '../customHooks/useCards';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CardDeck = ({ cards, handleClick }) => {
  return (
    <Div>
      {cards?.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          img={card.img}
          handleClick={handleClick.bind(card)}
        />
      ))}
    </Div>
  );
};

export default CardDeck;
