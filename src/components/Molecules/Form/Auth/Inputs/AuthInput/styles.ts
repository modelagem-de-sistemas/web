import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 0.5rem;
  padding: 1.125rem 1rem;
  background-color: #fff;
  margin-top: 1rem;
  border-radius: 0.5rem;

  > input {
    border: none;
    outline: none;
    font-size: var(--normal-font-size);
    font-weight: 700;
    color: var(--first-color-dark);

    &::placeholder {
      font-size: var(--normal-font-size);
      font-family: var(--body-font);
      color: #a49eac;
    }
  }

  > svg {
    font-size: 1.2rem;
    color: var(--first-color);
  }
`;
