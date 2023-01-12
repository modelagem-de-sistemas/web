import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > main {
    > p {
      margin-top: 1rem;
    }
  }

  > aside {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
