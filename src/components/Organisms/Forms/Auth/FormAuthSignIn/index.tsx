import AuthButton from '@/components/Molecules/Form/Auth/Inputs/AuthButton';
import AuthInput from '@/components/Molecules/Form/Auth/Inputs/AuthInput';
import React from 'react';
import { CgLock, CgMail } from 'react-icons/cg';
import { ForgotPassword } from '../styles';
import { Container } from './styles';

const FormAuthSignIn: React.FC = () => {
  return (
    <Container>
      <h1>Sign In</h1>

      <AuthInput type="text" placeholder="E-mail" icon={<CgMail color="var(--first-color)" />} id="mail" />

      <AuthInput type="password" placeholder="Password" icon={<CgLock color="var(--first-color)" />} id="password" />

      <ForgotPassword href="#">Forgot password?</ForgotPassword>

      <AuthButton>Sign In</AuthButton>
    </Container>
  );
};

export default FormAuthSignIn;
