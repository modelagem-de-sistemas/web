import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

import { Container, Content, Logo, Items, DropButton } from './styles';
import SidebarDefault from '../../Sidebars/DefaultSidebar';
import { navigations } from '@/constants/Components/Navigation';
import NavigationSearch from '@/components/Molecules/SearchItems/NavigationSearch';

const DefaultNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(true);
  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    function screenRedimension() {
      setScrolled(window.scrollY > 50);
      setMobile(window.innerWidth < 600);
    }

    screenRedimension();
    window.addEventListener('scroll', function () {
      screenRedimension();
    });
    window.addEventListener('resize', function () {
      screenRedimension();
    });
  }, []);

  useEffect(() => {
    if (sidebar) {
      setScrolled(true);
      return;
    }

    if (window.scrollY < 50) setScrolled(false);
  }, [sidebar]);

  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <a>Mistérios do Rosário</a>
          </Link>
        </Logo>
        {!mobile ? (
          <>
            <Items>
              {navigations.map(item => (
                <Link href={item.url}>
                  <a href={item.url}>{item.title}</a>
                </Link>
              ))}
              <NavigationSearch />
            </Items>
          </>
        ) : (
          <>
            <SidebarDefault active={sidebar} />
            <DropButton onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <CgClose /> : <FaBars />}
            </DropButton>
          </>
        )}
      </Content>
    </Container>
  );
};

export default DefaultNavbar;
