import React from 'react';
import Card from './Card';
import getCardsć from '../customHooks/useCards';

const CardDeck = ({ cards }) => {
  console.log(cards);

  return (
    <div>
      {cards?.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default CardDeck;
