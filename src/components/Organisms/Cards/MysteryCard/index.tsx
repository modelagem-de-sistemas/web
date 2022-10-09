import Link from 'next/link';
import React from 'react';

import { Container, Content } from './styles';

interface Props {
  mystery: Mystery;
}

const MysteryCard: React.FC<Props> = props => {
  return (
    <Link href={`/categoria/${props.mystery.uid}`}>
      <Container
        image={props.mystery.image}
        href={`/categoria/${props.mystery.uid}`}
      >
        <Content>
          <h3>{props.mystery.title}</h3>
          <p>{props.mystery.subtitle}</p>
        </Content>
      </Container>
    </Link>
  );
};

export default MysteryCard;
