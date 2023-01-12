import React from 'react';

import { Container } from './styles';

interface Props {
  id: string;
  type: string;
  placeholder: string;
  icon: JSX.Element;
  reference: React.RefObject<HTMLInputElement>;
}

const AuthInput: React.FC<Props> = (props) => {
  const { id, type, placeholder, icon, reference } = props;

  return (
    <Container id={id}>
      {icon}
      <input type={type} placeholder={placeholder} autoComplete="off" ref={reference} />
    </Container>
  );
};

export default AuthInput;
