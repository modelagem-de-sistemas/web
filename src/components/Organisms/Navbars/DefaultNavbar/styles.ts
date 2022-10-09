import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  width: 100%;
  transition: var(--transition);
  position: sticky;
  height: var(--navbar-size);
  z-index: 9;
`;

export const Logo = styled.div`
  > a {
    color: #000;
    font-weight: 400;

    &:hover {
      color: #000;
    }
  }
`;

export const Content = styled(TemplateContent)`
  padding: 1rem 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: #000;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    transition: var(--transition);
    font-size: var(--font-text-size);

    &:hover {
      color: #444;
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const DropButton = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  transition: var(--transition);
  border: solid 0.1px #000;
  border-radius: var(--border-radius);

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;
