import styled from 'styled-components';

export const CardAnchor = styled.a`
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  padding: 0.5rem 3rem;
  border-radius: 25px;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
