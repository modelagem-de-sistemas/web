import SidebarListItem from '@/components/Molecules/ListItems/SidebarListItem';
import { AppConfig } from '@/config';
import React, { useRef } from 'react';
import { FiBook, FiSettings, FiFolder, FiHome, FiLogOut, FiMail, FiUser, FiUsers } from 'react-icons/fi';
import { CgWebsite, CgBriefcase } from 'react-icons/cg';
import { RiDashboardFill } from 'react-icons/ri';

import { Container, Content, Heading, IconContainer, Items, List, Logo } from './styles';
import Link from 'next/link';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface Props {
  handleSidebar: (open: boolean) => void;
  sidebarOpen: boolean;
}

const AdminSidebar: React.FC<Props> = (props) => {
  const ref = useRef<any>(null);

  useOnClickOutside(ref, (): void => {
    props.handleSidebar(false);
  });

  return (
    <Container ref={ref} active={props.sidebarOpen}>
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

              <SidebarListItem label="Home" icon={<FiHome />} active href="/" />

              <div className="dropdown">
                <SidebarListItem label="Profile" icon={<FiUser />} href="/" />

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

              <SidebarListItem label="Messages" icon={<FiMail />} href="/" />

              <SidebarListItem label="Contacts" icon={<FiUsers />} href="/" />
            </Items>

            <Items>
              <Heading>Explore</Heading>

              <SidebarListItem label="Homepage" icon={<CgWebsite />} href="/" />
              <SidebarListItem label="Educations" icon={<FiBook />} href="/" />
              <SidebarListItem label="Skills" icon={<FiSettings />} href="/" />
              <SidebarListItem label="Jobs" icon={<CgBriefcase />} href="/" />
              <SidebarListItem label="Projects" icon={<FiFolder />} href="/" />
            </Items>
          </List>
        </main>

        <footer>
          <SidebarListItem label="Log Out" icon={<FiLogOut />} href="/" />
        </footer>
      </Content>
    </Container>
  );
};

export default AdminSidebar;
