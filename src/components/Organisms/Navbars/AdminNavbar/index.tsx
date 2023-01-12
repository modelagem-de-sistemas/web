import { AppConfig } from '@/config';
import React from 'react';
import { Container, Content, Logo, Toggle } from './styles';

interface Props {
  handleSidebar: () => void;
}

const AdminNavbar: React.FC<Props> = ({ handleSidebar }) => {
  return (
    <Container>
      <Content>
        <Logo>{AppConfig.logo}</Logo>

        <Toggle onClick={() => handleSidebar()} />
      </Content>
    </Container>
  );
};

export default AdminNavbar;
