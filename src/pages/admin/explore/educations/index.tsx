import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import TableView from '@/components/Templates/TableView';
import api from '@/services/apis';



const DashboardEducation: NextPage = () => {
  const [content, setContent] = useState<EducationData[]>();

  useEffect( () => {
    api.get("/education").then( res => {
      setContent(res.data);
    }).catch(err => alert(err))
  }, [])
  return (
    <DashboardPage>
      <h1>Educations</h1>
      <TableView content={{content, type: "education"}}/>

    </DashboardPage>
  );
};

export default DashboardEducation;
