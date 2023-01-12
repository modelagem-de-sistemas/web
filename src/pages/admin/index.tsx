import type { NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardIntro from '@/components/Organisms/Containers/DashboardIntro';

const DashboardHome: NextPage = () => {
  return (
    <DashboardPage>
      <DashboardIntro
        title="Welcome to your dashboard!"
        description="Here you can manage your profile, your educations, your experiences, and your skills."
      />
    </DashboardPage>
  );
};

export default DashboardHome;
