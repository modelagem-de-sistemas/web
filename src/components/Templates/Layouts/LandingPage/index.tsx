import DefaultFooter from '@/components/Organisms/Footers/DefaultFooter';
import DefaultNavbar from '@/components/Organisms/Navbars/DefaultNavbar';
import React from 'react';

import { Container, NavbarSection } from './styles';

const LandingPage: React.FC = props => { 
  return (
    <>
      <Container background='#f0f0f0'>
        <NavbarSection noPadding>
          <DefaultNavbar/>
        </NavbarSection>
        {props.children}
      </Container>

      <DefaultFooter />
    </>
  );
};

export default LandingPage;
