import React from 'react';

import { Container } from './styles';

interface Props {
  id: string;
  type: string;
  placeholder: string;
  icon: JSX.Element;
}

const AuthInput: React.FC<Props> = (props) => {
  const { id, type, placeholder, icon } = props;

  return (
    <Container>
      {icon}
      <input type={type} placeholder={placeholder} autoComplete="off" />
    </Container>
  );
};

export default AuthInput;
