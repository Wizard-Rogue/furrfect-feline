import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CardWrapper, ImageLink, ButtonWrapper } from './card.styles';
import SelectionContext, { SelectionContextType } from '../../../../contexts/selectionContext';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  id: string;
  image: string;
};

function Card(props: CardProps) {
  const { id, image } = props;
  const { setSelectedCat } = useContext(SelectionContext) as SelectionContextType;
  const navigate = useNavigate();

  function loadCat() {
    console.log(id);
    setSelectedCat(id);
    navigate(`/cats/${id}`);
  };

  return (
    <CardWrapper>
      <ImageLink src={image} />
      <ButtonWrapper>
        <Button variant='primary' onClick={loadCat}>View Details</Button>
      </ButtonWrapper>
    </CardWrapper>
  )
};

export default Card;
