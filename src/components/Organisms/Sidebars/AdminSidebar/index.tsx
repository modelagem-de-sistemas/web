import SidebarListItem from '@/components/Molecules/ListItems/SidebarListItem';
import { AppConfig } from '@/config';
import React, { useRef } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { RiDashboardFill } from 'react-icons/ri';

import { Container, Content, Heading, IconContainer, Items, List, Logo } from './styles';
import Link from 'next/link';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { adminSidebar } from '@/constants/components/Admin/Sidebar';
import SidebarDropdownListItem from '@/components/Molecules/ListItems/SidebarDropdownListItem';

interface Props {
  handleSidebar: (open: boolean) => void;
  sidebarOpen: boolean;
}

const AdminSidebar: React.FC<Props> = (props) => {
  const ref = useRef<any>(null);
  const sidebar = adminSidebar;

  console.log('sidebar', sidebar);

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
            {sidebar.map((item, index) => (
              <Items key={index}>
                <Heading>{item.label}</Heading>

                {item.items.map((listItem, index) => {
                  if (listItem?.items) {
                    return <SidebarDropdownListItem key={index} item={listItem} />;
                  }
                  return <SidebarListItem key={index} label={listItem.label} icon={listItem.icon} href={listItem.href} />;
                })}
              </Items>
            ))}
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
