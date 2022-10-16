import styled, { css } from 'styled-components';

interface Props {
  active?: boolean;
}

export const Container = styled.nav<Props>`
  position: fixed;
  top: 0;
  left: -100%;
  height: 100vh;
  padding: 1rem 1rem 0;
  background-color: var(--container-color);
  box-shadow: 1px 0 0 rgba(22, 8, 43, 0.1);
  z-index: var(--z-fixed);
  transition: 0.4s;

  ${({ active }) =>
    active &&
    css`
      left: 0;

      span,
      h3 {
        opacity: 1;
      }
    `}

  .dropdown {
    overflow: hidden;
    max-height: 21px;
    transition: 0.4s ease-in-out;

    &-collapse {
      background-color: var(--first-color-light);
      border-radius: 0.25rem;
      margin-top: 1rem;
    }
    &-content {
      display: grid;
      row-gap: 0.5rem;
      padding: 0.75rem 2.5rem 0.75rem 1.8rem;
    }

    &-item {
      font-size: var(--smaller-font-size);
      font-weight: var(--font-medium);
      color: var(--text-color);

      &:hover {
        color: var(--first-color);
      }
    }

    &-icon {
      margin-left: auto;
      transition: 0.4s;
    }

    &:hover {
      max-height: 100rem;
    }

    &:hover &-icon {
      transform: rotate(180deg);
    }
  }

  @media screen and (min-width: 768px) {
    left: 0;
    padding: 1.2rem 1.5rem 0;
    width: 68px;

    span,
    h3 {
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      width: var(--nav-width);

      span,
      h3 {
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;
  overflow: auto;
  scrollbar-width: none;

  > footer {
    margin-top: 4rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  row-gap: 2.5rem;
`;

export const Items = styled.ul`
  list-style: none;
  display: grid;
  row-gap: 1.5rem;

  @media screen and (min-width: 768px) {
    row-gap: 1.7rem;
  }
`;

export const Heading = styled.h3`
  font-size: var(--normal-font-size);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--text-color-light);
`;

export const IconContainer = styled.div`
  transition: 0.4s;
  font-size: 1.2rem;
  margin-right: 0.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--text-color);
  font-weight: var(--font-semi-bold);
  margin-bottom: 2.5rem;
  cursor: pointer;

  span {
    transition: 0.3s;
  }

  &:hover {
    color: var(--first-color);
  }
`;
