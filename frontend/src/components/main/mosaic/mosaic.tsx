import React, { useContext } from 'react';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import { MosaicList, Wrapper } from './mosaic.styles';
import Card from './card/card';
import Topbar from '../topbar/topbar';

function Mosaic() {
  const { catsInfo } = useContext(SelectionContext) as SelectionContextType;

  return (
    <Wrapper>
      <Topbar />
      <MosaicList>
        {catsInfo.map((catInfo) => {
          return (
            <Card
              key={catInfo.id}
              id={catInfo.id}
              image={catInfo.url}
            />
          )
        })}
      </MosaicList>
    </Wrapper>
  )
};

export default Mosaic;
