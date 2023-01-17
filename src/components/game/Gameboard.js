import React from 'react';
import Card from './Card';
import getRandomIds from './customHooks/getRandomIds';
import useLevels from './customHooks/useLevels';

const Gameboard = ({ numberOfCards, range }) => {
  const [level, setLevel] = useLevels(0);

  return (
    <div>
      {ids.map((id) => {
        return <Card cardInfo={cardInfo} />;
      })}
    </div>
  );
};
export default Gameboard;
