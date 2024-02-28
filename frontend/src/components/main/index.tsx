import React, { useState } from 'react';
import Wrapper from './index.styles';
import Topbar from './topbar/topbar';
import Mosaic from './mosaic/mosaic';
import SelectionContext from '../../contexts/selectionContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedBreed, setSelectedBreed] = useState<string>('');

  return (
    <SelectionContext.Provider value={{ selectedBreed, setSelectedBreed }}>
      <Wrapper>
        <Topbar></Topbar>
        <Mosaic></Mosaic>
      </Wrapper>
    </SelectionContext.Provider>
  );
}

export default App;
