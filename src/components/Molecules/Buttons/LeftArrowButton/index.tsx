import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { Container } from './styles';

interface Props {
  action(): void;
  darkTheme?: boolean;
}

const LeftArrowButton: React.FC<Props> = props => {
  return (
    <Container
      onClick={() => props.action()}
      aria-label="Left"
      darkTheme={props.darkTheme}
    >
      <IoIosArrowBack />
    </Container>
  );
};

export default LeftArrowButton;
