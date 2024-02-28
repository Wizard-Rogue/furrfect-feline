import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const CardWrapper = styled.li`
  display: flex;
  flex-flow: column nowrap;
  height: 40vh;
  flex-grow: 1;
  margin: 2vmin;
`;

const ImageLink = styled(Image)`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 1vmin;
`;

const ButtonWrapper = styled.div`
  padding: 0.5em;
  text-align: center;
`;

export { CardWrapper, ImageLink, ButtonWrapper };
