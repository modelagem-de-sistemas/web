import SidebarListItem from '@/components/Molecules/ListItems/SidebarListItem';
import { AppConfig } from '@/config';
import React from 'react';
import { FiBook, FiSettings, FiFolder, FiHome, FiLogOut, FiMail, FiUser, FiUsers } from 'react-icons/fi';
import { CgWebsite, CgBriefcase } from 'react-icons/cg';
import { RiDashboardFill } from 'react-icons/ri';

import { Container, Content, Heading, IconContainer, Items, List, Logo } from './styles';
import Link from 'next/link';

const AdminSidebar: React.FC = () => {
  return (
    <Container>
      <Content>
        <main>
          <Link href="/admin">
            <Logo>
              <IconContainer>
                <RiDashboardFill />
              </IconContainer>

              <span>{AppConfig.logo}</span>
            </Logo>
          </Link>

          <List>
            <Items>
              <Heading>Profile</Heading>

              <SidebarListItem label="Home" icon={<FiHome />} active uri="/" />

              <div className="dropdown">
                <SidebarListItem label="Profile" icon={<FiUser />} uri="/" />

                <div className="dropdown-collapse">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      My Account
                    </a>
                    <a href="#" className="dropdown-item">
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              <SidebarListItem label="Messages" icon={<FiMail />} uri="/" />

              <SidebarListItem label="Contacts" icon={<FiUsers />} uri="/" />
            </Items>

            <Items>
              <Heading>Explore</Heading>

              <SidebarListItem label="Homepage" icon={<CgWebsite />} uri="/" />
              <SidebarListItem label="Educations" icon={<FiBook />} uri="/" />
              <SidebarListItem label="Skills" icon={<FiSettings />} uri="/" />
              <SidebarListItem label="Jobs" icon={<CgBriefcase />} uri="/" />
              <SidebarListItem label="Projects" icon={<FiFolder />} uri="/" />
            </Items>
          </List>
        </main>

        <footer>
          <SidebarListItem label="Log Out" icon={<FiLogOut />} uri="/" />
        </footer>
      </Content>
    </Container>
  );
};

export default AdminSidebar;
