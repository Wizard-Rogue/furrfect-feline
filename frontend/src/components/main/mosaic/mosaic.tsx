import React, { useState, useEffect, useContext } from 'react';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import MosaicList from './mosaic.styles';
import Card from './card/card';
import { CatsInfo } from '../../../types/shared';

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
  )
};

export default Mosaic;
