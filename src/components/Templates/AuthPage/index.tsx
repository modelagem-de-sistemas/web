import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, Content } from './styles';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode;
}

const AuthPage: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <ToastContainer />
    </Container>
  );
};

export default AuthPage;
