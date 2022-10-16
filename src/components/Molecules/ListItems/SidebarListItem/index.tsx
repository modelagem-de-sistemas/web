import Link from 'next/link';
import React from 'react';

import { Container, IconContainer } from './styles';

interface Props {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  uri: string;
}

const SidebarListItem: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={props.uri}>
        <Container href={props.uri} className="link active" active={props.active}>
          <IconContainer>{props.icon}</IconContainer>
          <span>{props.label}</span>
        </Container>
      </Link>
    </>
  );
};

export default SidebarListItem;
