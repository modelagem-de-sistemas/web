import React from 'react';
import { Container, Content } from './styles';

interface Props {
  children: React.ReactNode;
}

const AuthPage: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default AuthPage;
