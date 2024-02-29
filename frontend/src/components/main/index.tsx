import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SelectionContext from '../../contexts/selectionContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedBreed, setSelectedBreed] = useState<string>('');

  return (
    <SelectionContext.Provider value={{ selectedBreed, setSelectedBreed }}>
      <Outlet />  
    </SelectionContext.Provider>
  );
}

export default App;
