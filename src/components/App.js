import { useState, useEffect } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Gameboard from './game/Gameboard';

function App() {
  return (
    <div id="app">
      <Header />
      <Gameboard />
      <Footer />
    </div>
  );
}

export default App;
