import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, ImageLink } from './card.styles';

type CardProps = {
  id: string;
  image: string;
};

function Card(props: CardProps) {
  const { id, image } = props;

  return (
    <CardWrapper>
      <Link to={image}>
        <ImageLink src={image} />
      </Link>
    </CardWrapper>
  )
};

export default Card;
