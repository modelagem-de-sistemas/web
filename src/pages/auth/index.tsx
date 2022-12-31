import type { NextPage } from 'next';
import React from 'react';

import AuthPage from '@/components/Templates/AuthPage';
import AuthContainer from '@/components/Organisms/Containers/AuthContainer';

const Login: NextPage = () => {
  return (
    <AuthPage>
      <AuthContainer />
    </AuthPage>
  );
};

export default Login;
