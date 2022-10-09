import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Container } from './styles';

interface Props {
  action(): void;
  darkTheme?: boolean;
}

const RightArrowButton: React.FC<Props> = props => {
  return (
    <Container
      onClick={() => props.action()}
      aria-label="Right"
      darkTheme={props.darkTheme}
    >
      <IoIosArrowForward />
    </Container>
  );
};

export default RightArrowButton;
