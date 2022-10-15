import { AppConfig } from '@/config';
import React from 'react';
import { AvatarContainer, Container, Content, Logo, Toggle } from './styles';

const AdminNavbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <AvatarContainer />

        <Logo>{AppConfig.logo}</Logo>

        <Toggle />
      </Content>
    </Container>
  );
};

export default AdminNavbar;
