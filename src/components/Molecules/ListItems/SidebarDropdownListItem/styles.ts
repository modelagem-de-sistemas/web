import styled, { css } from 'styled-components';

interface Props {
  active?: boolean;
}

export const Container = styled.div<Props>`
  overflow: hidden;
  max-height: 21px;
  transition: var(--transition);

  i {
    margin-left: auto;
    transition: var(--transition);
  }

  ${({ active }) =>
    active &&
    css`
      max-height: 100rem;

      aside {
        &:last-of-type {
          transform: rotate(-180deg);
        }
      }
    `}

  @media screen and (min-width: 768px) {
    &:hover {
      max-height: 100rem;
    }

    &:hover {
      aside {
        &:last-of-type {
          transform: rotate(-180deg);
        }
      }
    }
  }
`;

export const Content = styled.a<Props>`
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? 'var(--first-color)' : 'var(--text-color)')};
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  transition: var(--transition);

  > span {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    white-space: nowrap;
  }

  &:hover {
    color: var(--first-color);
  }
`;

export const IconContainer = styled.aside`
  transition: var(--transition);
  font-size: 1.2rem;
  margin-right: 0.5rem;

  &:last-of-type {
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Dropdown = styled.div`
  background-color: var(--first-color-light);
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export const DropdownContent = styled.div`
  display: grid;
  row-gap: 0.5rem;
  padding: 0.75rem 2.5rem 0.75rem 1.8rem;
`;

export const DropdownItem = styled.a`
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  color: var(--text-color);

  &:hover {
    color: var(--first-color);
  }
`;
