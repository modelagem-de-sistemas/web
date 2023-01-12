import type { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardHeader';
import TableMaker from '@/components/Organisms/Tables/TableMaker';
import { jobTableHeaders } from '@/utils/constants/components/Admin/Forms/Job';
import { getJobs } from '@/lib/job';

interface Props {
  jobs: JobData[];
}

const DashboardJobs: NextPage<Props> = ({ jobs }) => {
  const [modal, setModal] = useState<string>('');

  return (
    <DashboardPage>
      <DashboardHeader title="Jobs" description="Here you can manage your jobs history and qualification." handleModal={setModal} />
      <TableMaker content={jobs} handleModal={setModal} headers={jobTableHeaders} />
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

  const jobs = await getJobs();

  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs))
    }
  };
};

export default DashboardJobs;
