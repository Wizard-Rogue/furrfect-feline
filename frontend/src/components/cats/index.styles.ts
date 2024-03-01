import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const CatViewWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const CatImage = styled(Image)`
  max-height: 40rem;
  max-width: 100%;
  object-fit: contain;
  padding: 1rem;
`;

const TextRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 3rem;
`;

const TextLabel = styled.div`
  flex: 0 1 10rem;
`;

const TextContent = styled.div`
  flex: 2;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 1rem;
`;

export {
  CatViewWrapper,
  CatImage,
  TextRow,
  TextLabel,
  TextContent,
  NavigationContainer,
};
