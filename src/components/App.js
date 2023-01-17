import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useLevels from './game/customHooks/useLevels';

import Gameboard from './game/Gameboard';

function App() {
  const [level, setLevel] = useState(1);
  return (
    <div id="app">
      <Gameboard numberOfCards={5} range={[100, 200]} />
    </div>
  );
}

export default App;
