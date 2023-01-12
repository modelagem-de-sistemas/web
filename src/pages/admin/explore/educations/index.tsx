import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import TableView from '@/components/Organisms/Tables/TableView';
import DashboardHeader from '@/components/Organisms/Containers/DashboardIntro';
import { getEducations } from '@/lib/education';

interface Props {
  educations: EducationData[];
}

const DashboardEducation: NextPage<Props> = ({ educations }) => {
  return (
    <DashboardPage>
      <DashboardHeader title="Educations" description="Here you can manage your educations." />
      {/* <TableView content={educations} type={'education'} /> */}
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
      educations
    }
  };
};

export default DashboardEducation;
