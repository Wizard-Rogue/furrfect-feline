import React from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {
  CatViewWrapper,
  CatImage,
  TextRow,
  NavigationContainer,
} from "./index.styles";
import BreedSection from "./breedSection/breedSection";
import { CatsInfo } from "../../types/shared";

function Pluralize(value: number) {
  return value > 1 ? 's' : '';
}

function CatPage() {
  const { catData: { url, breeds } } = useLoaderData() as { catData: CatsInfo };
  const navigate = useNavigate();

  return (
    <CatViewWrapper>
      <NavigationContainer>
        <Button variant="primary" onClick={() => navigate(-1)}>Go Back</Button>
      </NavigationContainer>
      <CatImage src={url} />
      {!breeds || breeds?.length === 0 ? (
        <TextRow>
          <h1>There is no breed data available for this cat! Sorry!</h1>
        </TextRow>
      ) : (
        <h1>This cat has {breeds?.length} breed{Pluralize(breeds?.length || 0)}!</h1>
      )}
      {breeds?.map((breed) => {
        return (
          <BreedSection breed={breed} key={breed.id} />
        )
      })}
    </CatViewWrapper>
  );
};

export default CatPage;
