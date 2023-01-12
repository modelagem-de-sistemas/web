import type { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardHeader';
import TableMaker from '@/components/Organisms/Tables/TableMaker';
import { skillTableHeaders } from '@/utils/constants/components/Admin/Forms/Skill';
import { getSkills } from '@/lib/skill';

interface Props {
  skills: SkillData[];
}

const DashboardSkills: NextPage<Props> = ({ skills }) => {
  const [modal, setModal] = useState<string>('');

  return (
    <DashboardPage>
      <DashboardHeader title="Skills" description="Here you can manage your skills and the methodologys that you know." handleModal={setModal} />
      <TableMaker content={skills} handleModal={setModal} headers={skillTableHeaders} />
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

  const skills = await getSkills();

  return {
    props: {
      skills: JSON.parse(JSON.stringify(skills))
    }
  };
};

export default DashboardSkills;
