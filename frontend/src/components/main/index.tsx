import React, { useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SelectionContext from '../../contexts/selectionContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CatsInfo, PageMetadata } from '../../types/shared';
import loadCats from './catsLoader';

function App() {
  const [ selectedBreed, setSelectedBreed ] = useState<string>('');
  const [ catsInfo, setCatsInfo ] = useState<CatsInfo[]>([]);
  const [ pageMetadata, setPageMetadata ] = useState<PageMetadata>({ page: 0, disableLoadMore: false });

  async function loadFirstCats () {
    const firstCatsFetch = await loadCats();
    setCatsInfo(firstCatsFetch);
  }

  useLayoutEffect(() => {
    loadFirstCats();
  }, []);

  return (
    <SelectionContext.Provider value={
      {
        selectedBreed,
        setSelectedBreed,
        catsInfo,
        setCatsInfo,
        pageMetadata,
        setPageMetadata,
      }
    }>
      <Outlet />  
    </SelectionContext.Provider>
  );
}

export default App;
