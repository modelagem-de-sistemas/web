import type { NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import TableView from '@/components/Templates/TableView';


const DashboardEducation: NextPage = () => {
  return (
    <DashboardPage>
      <h1>Educations</h1>
      <TableView content={test}/>

    </DashboardPage>
  );
};

export default DashboardEducation;
