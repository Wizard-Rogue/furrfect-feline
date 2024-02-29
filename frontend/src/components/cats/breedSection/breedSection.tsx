import React from "react";
import { TextRow, TextLabel, TextContent } from "../index.styles";
import { BreedInfo } from "../../../types/shared";

type BreedSectionProps = {
  breed: BreedInfo;
};

function BreedSection(props: BreedSectionProps) {
  const { breed: { name, description, origin, temperament } } = props;

  return (
    <>
      <TextRow>
        <TextLabel>Breed Name:</TextLabel>
        <TextContent>{name || "No breed name is available"}</TextContent>
      </TextRow>
      <TextRow>
        <TextLabel>Origin:</TextLabel>
        <TextContent>{origin || "This cat's origin is not available"}</TextContent>
      </TextRow>
      <TextRow>
        <TextLabel>Temperament:</TextLabel>
        <TextContent>{temperament || "There is not temperament data available for this cat"}</TextContent>
      </TextRow>
      <TextRow>
        <TextLabel>Description:</TextLabel>
        <TextContent>{description || "There is no written available description for this cat"}</TextContent>
      </TextRow>
    </>
  )
};

export default BreedSection;
