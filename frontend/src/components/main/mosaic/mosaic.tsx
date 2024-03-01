import React, { useContext } from 'react';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import { MosaicList, Wrapper, StickyBottomWrapper } from './mosaic.styles';
import Card from './card/card';
import Topbar from '../topbar/topbar';
import { Button } from 'react-bootstrap';
import loadCats from '../../../loaders/catsLoader';

function Mosaic() {
  const { catsInfo, pageMetadata, setCatsInfo, setPageMetadata, selectedBreed } = useContext(SelectionContext) as SelectionContextType;

  async function loadMore() {
    const catsData = await loadCats(selectedBreed, pageMetadata.page + 1);
    setCatsInfo([ ...catsInfo, ...catsData ]);
    setPageMetadata({ page: pageMetadata.page + 1, disableLoadMore: !catsData || catsData.length !== 10 });
  };

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
      {!pageMetadata.disableLoadMore && (
        <StickyBottomWrapper>
          <Button variant="primary" disabled={pageMetadata.disableLoadMore} onClick={loadMore}>Load More</Button>
        </StickyBottomWrapper>
      )}
    </Wrapper>
  )
};

export default Mosaic;
