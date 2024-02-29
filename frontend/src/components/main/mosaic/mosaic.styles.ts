import styled from 'styled-components';

const MosaicList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 2vmin;
  list-style: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;

  > * {
    padding: 1rem;
    flex: 1 100%;
  }
`;

const StickyBottomWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 20;
  bottom: 0;
  background: white;
  border-top: 1px solid silver;
`;

export {
  MosaicList,
  Wrapper,
  StickyBottomWrapper,
};
