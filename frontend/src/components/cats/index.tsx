import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {
  CatViewWrapper,
  CatImage,
  TextRow,
  NavigationContainer,
} from "./index.styles";
import { CatsInfo } from "../../types/shared";
import BreedSection from "./breedSection/breedSection";

type CatPageProps = {
  CatsInfo: CatsInfo;
};

function Pluralize(value: number) {
  return value > 1 ? 's' : '';
}

function CatPage(props: CatPageProps) {
  const { CatsInfo: { url, breeds } } = props;
  const navigate = useNavigate();

  return (
    <CatViewWrapper>
      <NavigationContainer>
        <Button variant="primary" onClick={() => navigate(-1)} />
      </NavigationContainer>
      <CatImage src={url} />
      {breeds?.length === 0 ? (
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
