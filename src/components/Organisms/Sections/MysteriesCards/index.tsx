import React from 'react';
import MysteryCard from '../../Cards/MysteryCard';

import { Container } from './styles';

interface Props {
  mysteries: Mystery[];
}

const MysteriesCards: React.FC<Props> = props => {
  return (
    <Container>
      <header>
        <h2>Pesquisar por mistério</h2>
      </header>
      <main>
        {props.mysteries.map(item => (
          <MysteryCard key={item.uid} mystery={item} />
        ))}
      </main>
    </Container>
  );
};

export default MysteriesCards;
