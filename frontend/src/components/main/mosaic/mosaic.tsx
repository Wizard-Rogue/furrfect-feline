import React, { useState, useEffect, useContext } from 'react';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import { MosaicList, Wrapper } from './mosaic.styles';
import Card from './card/card';
import { CatsInfo } from '../../../types/shared';
import Topbar from '../topbar/topbar';

function Mosaic() {
  const { selectedBreed } = useContext(SelectionContext) as SelectionContextType;
  const [ catsInfo, setCatsInfo ] = useState<CatsInfo[]>([]);

  async function loadCats () {
    try {
      const catsRequest = await fetch("/cats", {
        method: "GET",
      });
  
      if (!catsRequest.ok) {
        console.error("Fetch failed!");
        throw new Error("Apologies but we could not load new cats for you at this time! Miau!");
      } else {
        const catsData = await catsRequest.json() as CatsInfo[];
        setCatsInfo([ ...catsInfo, ...catsData ]);
      }
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    loadCats();
  }, [selectedBreed]);

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
