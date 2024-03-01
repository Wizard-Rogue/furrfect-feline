import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import Wrapper from './topbar.styles';
import { BreedInfo } from '../../../types/shared';
import loadCats from '../../../loaders/catsLoader';

function Topbar() {
  const { breedsData } = useLoaderData() as { breedsData: BreedInfo[] };
  const { setSelectedBreed, setCatsInfo, selectedBreed, setPageMetadata } = useContext(SelectionContext) as SelectionContextType;

  /**
   * Function to update information on the context when the breed selection changes
   */
  async function updateSelectedBreed (event: React.ChangeEvent<HTMLSelectElement>) {
    const { target: { value } } = event;
    setSelectedBreed(value);
    const catsInfo = await loadCats(value);
    setCatsInfo([ ...catsInfo ]);
    setPageMetadata({ page: 0, disableLoadMore: !catsInfo || catsInfo.length !== 10 });
  };

  return (
    <Wrapper>
      <h3>Select a breed here:</h3>
      <Form.Select onChange={(event) => updateSelectedBreed(event)} defaultValue={selectedBreed}>
        <option value=""></option>
        {breedsData.map((breed) => {
          return (
            <option value={breed.id} key={breed.id}>{breed.name}</option>
          );
        })}
      </Form.Select>
    </Wrapper>
  )
};

export default Topbar;
