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
          card={card}
          key={card.id}
          id={card.id}
          img={
            card.img
              ? card.img
              : console.log(
                  'card.img is not defined look:',
                ) && console.log(card)
          }
          handleClick={handleClick}
        />
      ))}
    </Div>
  );
};

export default CardDeck;
