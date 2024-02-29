import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const CatViewWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const CatImage = styled(Image)`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const TextRow = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const TextLabel = styled.p`
  flex: 0 1 6rem;
`;

const TextContent = styled.p`
  flex: 2;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

export {
  CatViewWrapper,
  CatImage,
  TextRow,
  TextLabel,
  TextContent,
  NavigationContainer,
};
