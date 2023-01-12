import React from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const TableButton: React.FC<Props> = ({ children, onClick }) => {
  return <Container onClick={() => onClick && onClick()}>{children}</Container>;
};

export default TableButton;
