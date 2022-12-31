import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-y: hidden;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;
  }
`;
