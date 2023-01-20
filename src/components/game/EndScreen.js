import React from 'react';

const EndScreen = ({ stats, hasEnded }) => {
  return (
    <div hidden={!hasEnded}>
      <p>You scored: {stats?.points}</p>
    </div>
  );
};

export default EndScreen;
