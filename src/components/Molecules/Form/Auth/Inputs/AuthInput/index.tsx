import React from 'react';

import { Container } from './styles';

interface Props {
  id: string;
  type: string;
  placeholder: string;
  icon: JSX.Element;
  onChange: (value: string) => void;
  value: string;
}

const AuthInput: React.FC<Props> = (props) => {
  const { id, type, placeholder, icon, onChange, value } = props;

  return (
    <Container id={id}>
      {icon}
      <input type={type} placeholder={placeholder} autoComplete="off" onChange={(e) => onChange(e.target.value)} value={value} />
    </Container>
  );
};

export default AuthInput;
