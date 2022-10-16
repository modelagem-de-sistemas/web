import styled from 'styled-components';

interface Props {
  active?: boolean;
}

export const Container = styled.a<Props>`
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? 'var(--first-color)' : 'var(--text-color)')};
  flex-direction: row;
  box-sizing: border-box;

  > span {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    white-space: nowrap;
  }

  &:hover {
    color: var(--first-color);
  }
`;

export const IconContainer = styled.div`
  transition: 0.4s;
  font-size: 1.2rem;
  margin-right: 0.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
