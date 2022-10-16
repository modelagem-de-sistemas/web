import type { NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';

const DashboardHome: NextPage = () => {
  return (
    <DashboardPage>
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum modi praesentium quasi at delectus ullam repellat, doloribus
        laboriosam incidunt magni suscipit molestias consequuntur distinctio voluptatibus ea ducimus explicabo porro.
      </p>
    </DashboardPage>
  );
};

export default DashboardHome;
