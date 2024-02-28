import React from 'react';
import Button from 'react-bootstrap/Button';
import { CardWrapper, ImageLink, ButtonWrapper } from './card.styles';

type CardProps = {
  id: string;
  image: string;
};

function Card(props: CardProps) {
  const { id, image } = props;

  return (
    <CardWrapper>
      <ImageLink src={image} />
      <ButtonWrapper>
        <Button variant='primary'>View Details</Button>
      </ButtonWrapper>
    </CardWrapper>
  )
};

export default Card;
