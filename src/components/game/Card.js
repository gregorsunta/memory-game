import React, { useState } from 'react';
import styled from 'styled-components';
import useFetchData from './customHooks/useFetchData';

const Card = ({ cardInfo }) => {
  return (
    <div>
      {
        <img
          className="card"
          src={cardInfo?.sprites.other.dream_world.front_default}
          alt=""
        />
      }
    </div>
  );
};
export default Card;
