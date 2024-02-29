import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import Wrapper from './topbar.styles';
import { BreedInfo } from '../../../types/shared';
import catsLoader from '../catsLoader';

function Topbar() {
  const { breedsData } = useLoaderData() as { breedsData: BreedInfo[] };
  const { setSelectedBreed, setCatsInfo } = useContext(SelectionContext) as SelectionContextType;

  /**
   * Function to update information on the context when the breed selection changes
   */
  async function updateSelectedBreed (event: React.ChangeEvent<HTMLSelectElement>) {
    const { target: { value } } = event;
    setSelectedBreed(value);
    const catsInfo = await catsLoader();
    setCatsInfo([ ...catsInfo ]);
  };

  return (
    <Wrapper>
      <h3>Select a breed here:</h3>
      <Form.Select onChange={(event) => updateSelectedBreed(event)}>
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
