import type { NextPage } from 'next';
import React, { useEffect } from 'react';

import AuthPage from '@/components/Templates/AuthPage';
import AuthContainer from '@/components/Organisms/Containers/AuthContainer';
import { hashPassword } from '@/utils/helpers/auth';

const Login: NextPage = () => {
  useEffect(() => {
    console.log(hashPassword('123456'));
  }, []);
  return (
    <AuthPage>
      <AuthContainer />
    </AuthPage>
  );
};

export default Login;
