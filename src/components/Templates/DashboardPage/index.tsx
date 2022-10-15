import AdminNavbar from '@/components/Organisms/Navbars/AdminNavbar';
import React from 'react';

import { Container } from './styles';

interface Props {
  children?: React.ReactNode;
}

const DashboardPage: React.FC<Props> = (props) => {
  return (
    <Container>
      <AdminNavbar />
      <main>{props.children}</main>
    </Container>
  );
};

export default DashboardPage;
