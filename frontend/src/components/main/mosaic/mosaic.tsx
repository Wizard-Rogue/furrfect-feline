import React from 'react';
import MosaicList from './mosaic.styles';
import Card from './card/card';

function Mosaic() {
  return (
    <MosaicList>
      <Card id="1" image="https://cdn2.thecatapi.com/images/5rr.jpg" />
      <Card id="2" image="https://cdn2.thecatapi.com/images/agm.jpg" />
      <Card id="3" image="https://cdn2.thecatapi.com/images/b2r.png" />
    </MosaicList>
  )
};

export default Mosaic;
