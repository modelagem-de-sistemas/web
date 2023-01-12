import type { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardHeader';
import TableMaker from '@/components/Organisms/Tables/TableMaker';
import { projectTableHeaders } from '@/utils/constants/components/Admin/Forms/Project';
import { getProjects } from '@/lib/project';

interface Props {
  projects: ProjectData[];
}

const DashboardEducation: NextPage<Props> = ({ projects }) => {
  const [modal, setModal] = useState<string>('');

  return (
    <DashboardPage>
      <DashboardHeader title="Projects" description="Here you can manage the projects that you have been part of." handleModal={setModal} />
      <TableMaker content={projects} handleModal={setModal} headers={projectTableHeaders} />
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

  const projects = await getProjects();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects))
    }
  };
};

export default DashboardEducation;
