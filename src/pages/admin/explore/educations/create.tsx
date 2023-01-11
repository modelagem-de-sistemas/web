import type { NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import FormMaker from '@/components/Organisms/Forms/FormMaker';
import api from '@/services/apis';


const DashboardEducationCreate: NextPage = () => {
  const submit = () => {
    api.post("/education");
  }
    
  return (
    <DashboardPage>
        <h1>Educations</h1>
    


    </DashboardPage>
  );
};

export default DashboardEducationCreate;
