import AuthButton from '@/components/Molecules/Form/Auth/Inputs/AuthButton';
import AuthInput from '@/components/Molecules/Form/Auth/Inputs/AuthInput';
import { authLogin } from '@/services/auth';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { CgLock, CgMail } from 'react-icons/cg';
import { toast } from 'react-toastify';
// import { ForgotPassword } from '../styles';
import { Container } from './styles';

const FormAuthSignIn: React.FC = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue: string = emailRef?.current?.value || '';
    const passwordValue: string = passwordRef?.current?.value || '';

    await authLogin(emailValue, passwordValue)
      .then(() => {
        toast.success('Login realized with success!');
        router.push('/admin');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Container onSubmit={(e) => submit(e)}>
      <h1>Sign In</h1>

      <AuthInput reference={emailRef} type="text" placeholder="E-mail" icon={<CgMail color="var(--first-color)" />} id="mail" />

      <AuthInput
        reference={passwordRef}
        type="password"
        placeholder="Password"
        icon={<CgLock color="var(--first-color)" />}
        id="password"
      />

      {/* <ForgotPassword href="#">Forgot password?</ForgotPassword> */}

      <AuthButton>Sign In</AuthButton>
    </Container>
  );
};

export default FormAuthSignIn;
