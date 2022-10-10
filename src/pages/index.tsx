import React from 'react';
import { NextPage } from 'next';
import Metatags from '@/components/Templates/Seo/Metatags';

const Home: NextPage = () => {
  return (
    <>
      <Metatags title="Home" url="/" />
    </>
  );
};

export default Home;
