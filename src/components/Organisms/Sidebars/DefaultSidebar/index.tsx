import NavigationSearch from '@/components/Molecules/SearchItems/NavigationSearch';
import { navigations } from '@/constants/Components/Navigation';
import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

interface Props {
  active: boolean;
}

const SidebarDefault: React.FC<Props> = props => {
  return (
    <Container active={props.active}>
      <NavigationSearch />
      {navigations.map(item => (
        <Link href={item.url}>
          <a href={item.url}>{item.title}</a>
        </Link>
      ))}
    </Container>
  );
};

export default SidebarDefault;
