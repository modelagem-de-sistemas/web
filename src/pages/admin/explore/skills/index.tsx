import type { NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';

const DashboardEducation: NextPage = () => {
  return (
    <DashboardPage>
      <h1>Educations</h1>
      <p>Here you can add, edit and delete educations. You can also add, edit and delete education categories.</p>
    </DashboardPage>
  );
};

export default DashboardEducation;
