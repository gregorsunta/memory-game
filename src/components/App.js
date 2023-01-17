import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Gameboard from './game/Gameboard';

function App() {
  return (
    <div id="app">
      <Gameboard />
    </div>
  );
}

export default App;
