import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardIntro';
import { getEducations } from '@/lib/education';
import TableMaker from '@/components/Organisms/Tables/TableMaker';

interface Props {
  educations: EducationData[];
}

const DashboardEducation: NextPage<Props> = ({ educations }) => {
  return (
    <DashboardPage>
      <DashboardHeader title="Educations" description="Here you can manage your educations." />
      <TableMaker content={educations} apiPath="education" />
    </DashboardPage>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    };
  }

  const educations = await getEducations();

  console.log(educations);

  return {
    props: {
      educations: JSON.parse(JSON.stringify(educations))
    }
  };
};

export default DashboardEducation;
