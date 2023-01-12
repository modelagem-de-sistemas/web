import TableButton from '@/components/Molecules/Buttons/TableButton';
import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  description: string;
  handleModal?: (modal: string) => void;
}

const DashboardHeader: React.FC<Props> = ({ title, description, handleModal }) => {
  return (
    <Container>
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
      <aside>{handleModal && <TableButton onClick={() => handleModal('create')}>Create</TableButton>}</aside>
    </Container>
  );
};

export default DashboardHeader;
