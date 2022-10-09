import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;

  > input {
    margin-left: 1rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: rgba(0, 0, 0, 0.05) solid 1px;
  }

  > button {
    padding: 0.5rem 1rem;
    background-color: #fff;
    font-size: 1rem;
  }

  @media screen and (max-width: 900px) {
    height: auto;
    padding: 1rem;
    width: 100%;

    > input {
      width: 100%;
      margin: 0;
    }
  }
`;
