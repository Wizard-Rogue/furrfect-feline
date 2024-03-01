import React from 'react';
import Button from 'react-bootstrap/Button';
import { CardWrapper, MosaicCard } from './card.styles';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  id: string;
  image: string;
};

function Card(props: CardProps) {
  const { id, image } = props;
  const navigate = useNavigate();

  function loadCat() {
    console.log(id);
    navigate(`/cats/${id}`);
  };

  return (
    <CardWrapper>
      <MosaicCard>
        <MosaicCard.Img src={image} />
        <MosaicCard.Body>
          <Button variant="primary" onClick={loadCat}>View Details</Button>
        </MosaicCard.Body>
      </MosaicCard>
    </CardWrapper>
  )
};

export default Card;
