import AdminNavbar from '@/components/Organisms/Navbars/AdminNavbar';
import AdminSidebar from '@/components/Organisms/Sidebars/AdminSidebar';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';

interface Props {
  children?: React.ReactNode;
}

const DashboardPage: React.FC<Props> = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (open?: boolean) => {
    setSidebarOpen(open ?? !sidebarOpen);
  };

  return (
    <Container>
      <AdminNavbar handleSidebar={toggleSidebar} />
      <AdminSidebar handleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <ToastContainer />
      <main>{props.children}</main>
    </Container>
  );
};

export default DashboardPage;
