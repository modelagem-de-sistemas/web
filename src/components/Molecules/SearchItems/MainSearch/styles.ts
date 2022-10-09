import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  background-color: #fff;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: row;

  > button {
    padding: 1rem;
    color: #000;
    background-color: transparent;
  }

  > input {
    width: 100%;
    font-size: 1rem;
    border-radius: var(--border-radius);
  }
`;
