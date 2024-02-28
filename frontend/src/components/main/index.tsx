import React from 'react';
import Wrapper from './index.styles';
import Topbar from './topbar/topbar';
import Mosaic from './mosaic/mosaic';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Topbar></Topbar>
      <Mosaic></Mosaic>
    </Wrapper>
  );
}

export default App;
