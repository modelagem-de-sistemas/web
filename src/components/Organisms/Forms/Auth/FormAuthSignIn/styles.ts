import styled from 'styled-components';
import { AuthFormContainer } from '../styles';

export const Container = styled(AuthFormContainer)`
  bottom: 2rem;

  @media screen and (min-width: 1024px) {
    bottom: -2rem;
  }
`;
