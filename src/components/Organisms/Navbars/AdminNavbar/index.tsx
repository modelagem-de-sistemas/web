import { AppConfig } from '@/config';
import React from 'react';
import { AvatarContainer, Container, Content, Logo, Toggle } from './styles';

const AdminNavbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <AvatarContainer />

        <Logo>{AppConfig.logo}</Logo>

        <div className="toggle">
          <Toggle />
        </div>
      </Content>
    </Container>
  );
};

export default AdminNavbar;
