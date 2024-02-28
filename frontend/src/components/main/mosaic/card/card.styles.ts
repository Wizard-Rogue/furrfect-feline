import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const CardWrapper = styled.li`
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

export { CardWrapper, ImageLink };
