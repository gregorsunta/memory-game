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
    hasDefeated,
    handleClick,
    startLevel,
    resetGame,
  ] = useGame();

  useEffect(() => {
    console.log(level);
    startLevel();
  }, [level]);

  return (
    <div id="app">
      <Header score={score} highestScore={highestScore} />
      <Game
        level={level}
        score={score}
        highestScore={highestScore}
        cards={cards}
        hasEnded={hasEnded}
        hasDefeated={hasDefeated}
        handleClick={handleClick}
        resetGame={resetGame}
      />
      <Footer />
    </div>
  );
}

export default App;
