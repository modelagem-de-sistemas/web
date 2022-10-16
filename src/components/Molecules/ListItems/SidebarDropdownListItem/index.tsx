import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container, Content, IconContainer, Dropdown, DropdownContent, DropdownItem } from './styles';

interface Props {
  item: SidebarItem;
}

const SidebarDropdownListItem: React.FC<Props> = (props) => {
  const { icon, label, items } = props.item;
  const [openMobile, setOpenMobile] = useState<boolean>(false);

  const active = false;

  if (!items) {
    return null;
  }

  return (
    <Container active={openMobile}>
      <Content active={active} onClick={() => setOpenMobile(!openMobile)}>
        <IconContainer>{icon}</IconContainer>
        <span>{label}</span>
        <IconContainer>
          <FiChevronDown />
        </IconContainer>
      </Content>

      <Dropdown>
        <DropdownContent>
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <DropdownItem key={index} href={item.href}>
                {item.label}
              </DropdownItem>
            </Link>
          ))}
        </DropdownContent>
      </Dropdown>
    </Container>
  );
};

export default SidebarDropdownListItem;
