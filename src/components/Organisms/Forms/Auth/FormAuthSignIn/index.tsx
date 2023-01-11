import AuthButton from '@/components/Molecules/Form/Auth/Inputs/AuthButton';
import AuthInput from '@/components/Molecules/Form/Auth/Inputs/AuthInput';
import { login } from '@/lib/auth';
import { authLogin } from '@/services/auth';
import React, { useRef } from 'react';
import { CgLock, CgMail } from 'react-icons/cg';
import { ForgotPassword } from '../styles';
import { Container } from './styles';

const FormAuthSignIn: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submit = async (e) => {
    const emailValue: string = emailRef?.current?.value || '';
    const passwordValue: string = passwordRef?.current?.value || '';

    const response = await authLogin(emailValue, passwordValue)
      .then((res) => res)
      .catch((err) => err);
  };

  return (
    <Container>
      <h1>Sign In</h1>

      <AuthInput ref={emailRef} type="text" placeholder="E-mail" icon={<CgMail color="var(--first-color)" />} id="mail" />

      <AuthInput ref={passwordRef} type="password" placeholder="Password" icon={<CgLock color="var(--first-color)" />} id="password" />

      <ForgotPassword href="#">Forgot password?</ForgotPassword>

      <AuthButton>Sign In</AuthButton>
    </Container>
  );
};

export default FormAuthSignIn;
