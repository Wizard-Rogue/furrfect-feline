import React, { useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SelectionContext from '../../contexts/selectionContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CatsInfo } from '../../types/shared';
import catsLoader from './catsLoader';

function App() {
  const [ selectedBreed, setSelectedBreed ] = useState<string>('');
  const [ selectedCat, setSelectedCat ] = useState<string>('');
  const [ catsInfo, setCatsInfo ] = useState<CatsInfo[]>([]);

  async function loadFirstCats () {
    const firstCatsFetch = await catsLoader();
    setCatsInfo(firstCatsFetch);
  }

  useLayoutEffect(() => {
    loadFirstCats();
  }, []);

  return (
    <SelectionContext.Provider value={{ selectedBreed, setSelectedBreed, selectedCat, setSelectedCat, catsInfo, setCatsInfo }}>
      <Outlet />  
    </SelectionContext.Provider>
  );
}

export default App;
