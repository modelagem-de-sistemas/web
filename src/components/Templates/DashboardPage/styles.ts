import styled from 'styled-components';

export const Container = styled.div`
  > main {
    max-width: 1200px;
    padding: calc(var(--header-height) + 2rem) 3rem 3rem 6rem;

    @media screen and (max-width: 768px) {
      padding: calc(var(--header-height) + 1rem) 1rem 0 1rem;
    }
  }
`;
