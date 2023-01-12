import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './styles';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode;
}

const TemplateHome: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
      <ToastContainer />
    </Container>
  );
};

export default TemplateHome;
