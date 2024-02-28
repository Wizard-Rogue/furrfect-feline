import styled from 'styled-components';

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

export default Wrapper;
