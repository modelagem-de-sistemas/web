import AuthImage from '@/components/Atoms/Assets/Images/AuthImage';
import React from 'react';
import FormAuthSignIn from '../../Forms/Auth/FormAuthSignIn';

import { Container, FormsContainer } from './styles';

const AuthContainer: React.FC = () => {
  return (
    <Container>
      <header>
        <AuthImage />
      </header>

      <FormsContainer>
        <FormAuthSignIn />
      </FormsContainer>
    </Container>
  );
};

export default AuthContainer;
