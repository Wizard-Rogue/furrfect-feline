import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const CardWrapper = styled.li`
  margin: 2vmin;
  padding: 0.5rem;
`;

const MosaicCard = styled(Card)`
  .card-img {
    height: 35vh;
    object-fit: cover;
  }
`;

export { CardWrapper, MosaicCard };
