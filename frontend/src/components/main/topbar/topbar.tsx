import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import SelectionContext, { SelectionContextType } from '../../../contexts/selectionContext';
import Wrapper from './topbar.styles';
import { BreedInfo } from '../../../types/shared';

function Topbar() {
  const { breedsData } = useLoaderData() as { breedsData: BreedInfo[] };
  const { setSelectedBreed } = useContext(SelectionContext) as SelectionContextType;

  function updateSelectedBreed (event: React.ChangeEvent<HTMLSelectElement>) {
    const { target: { value } } = event;
    setSelectedBreed(value)
  }

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
