import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { FiAlignJustify } from 'react-icons/fi';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--container-color);
  box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
  padding: 0 1rem;
  z-index: var(--z-fixed);

  @media screen and (min-width: 768px) {
    padding: 0 3rem 0 6rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: var(--header-height);
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: calc(var(--header-height) + 0.5rem);
  }
`;

export const Logo = styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const AvatarContainer = styled(Avatar)`
  width: 35px;
  height: 35px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    order: 1;
  }
`;

export const Toggle = styled(FiAlignJustify)`
  font-size: 1.4rem;

  color: var(--title-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
