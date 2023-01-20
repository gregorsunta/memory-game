import { useState, useEffect } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Game from './game/Game';
import useGame from './customHooks/useGame';

function App() {
  const [
    cards,
    level,
    score,
    highestScore,
    hasEnded,
    handleClick,
    startLevel,
  ] = useGame();

  useEffect(() => {
    startLevel();
  }, [level]);

  return (
    <div id="app">
      <Header score={score} highestScore={highestScore} />
      <Game
        hasEnded={hasEnded}
        score={score}
        highestScore={highestScore}
        cards={cards}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;
