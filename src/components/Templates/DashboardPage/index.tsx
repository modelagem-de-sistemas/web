import AdminNavbar from '@/components/Organisms/Navbars/AdminNavbar';
import AdminSidebar from '@/components/Organisms/Sidebars/AdminSidebar';
import React from 'react';

import { Container } from './styles';

interface Props {
  children?: React.ReactNode;
}

const DashboardPage: React.FC<Props> = (props) => {
  return (
    <Container>
      <AdminNavbar />
      <AdminSidebar />
      <main>{props.children}</main>
    </Container>
  );
};

export default DashboardPage;
