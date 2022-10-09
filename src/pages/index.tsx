import React from 'react';
import { NextPage } from 'next';
import LandingPage from '@/components/Templates/Layouts/LandingPage';
import { Section } from '@/components/Atoms/Layouts/Templates/styles';
import SearchBanner from '@/components/Organisms/Sections/SearchBanner';
import MysteriesCards from '@/components/Organisms/Sections/MysteriesCards';
import { mysteries } from '@/constants/Components/MysteriesCards';
import Metatags from '@/components/Templates/Seo/Metatags';

const Home: NextPage = () => {
  return (
    <LandingPage>
      <Metatags title="Home" url="/" />

      <SearchBanner />

      <Section>
        <MysteriesCards mysteries={mysteries} />
      </Section>
    </LandingPage>
  );
};

export default Home;
