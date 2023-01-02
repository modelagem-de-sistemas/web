import type { NextPage } from 'next';
import React from 'react';

import TemplateHome from '@/components/Templates/LandingPage';
import LandingNavbar from '@/components/Organisms/Navbars/LandingNavbar';
import { landingMock } from '@/mocks/landing';

const Home: NextPage = () => {
  return (
    <TemplateHome>
      <LandingNavbar name={landingMock.name} />
    </TemplateHome>
  );
};

export default Home;
