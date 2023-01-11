import type { NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import api from '@/services/apis';


const DashboardEducationCreate: NextPage = () => {
  const submit = () => {
    api.put("/education");
  }
    
  return (
    <DashboardPage>
        <h1>Educations Update</h1>


    </DashboardPage>
  );
};

export default DashboardEducationCreate;
