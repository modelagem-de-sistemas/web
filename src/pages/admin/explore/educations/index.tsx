import type { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardHeader';
import { getEducations } from '@/lib/education';
import TableMaker from '@/components/Organisms/Tables/TableMaker';

interface Props {
  educations: EducationData[];
}

const DashboardEducation: NextPage<Props> = ({ educations }) => {
  const [modal, setModal] = useState<string>('');

  return (
    <DashboardPage>
      <DashboardHeader title="Educations" description="Here you can manage your educations." handleModal={setModal} />
      <TableMaker content={educations} handleModal={setModal} />
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
