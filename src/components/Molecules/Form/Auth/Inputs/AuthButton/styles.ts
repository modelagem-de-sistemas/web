import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  display: block;
  padding: 1rem;
  margin: 2rem 0;
  background-color: var(--first-color);
  color: #fff;
  font-weight: 600;
  text-align: center;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--first-color-dark);
  }
`;
