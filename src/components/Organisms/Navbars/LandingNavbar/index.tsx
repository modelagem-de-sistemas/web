import { landingNavbarItems } from '@/utils/constants/components/Landing/Navbar';
import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
}

const LandingNavbar: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <nav>
        <aside>
          <span>{name}</span>
        </aside>

        <main>
          {landingNavbarItems.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </main>
      </nav>
    </Container>
  );
};

export default LandingNavbar;
