import type { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardHeader';
import TableMaker from '@/components/Organisms/Tables/TableMaker';
import { homePageTableHeaders } from '@/utils/constants/components/Admin/Forms/Homepage';
import { getHomepage } from '@/lib/homepage';

interface Props {
  homePage: HomepageData[];
}

const DashboardHomePage: NextPage<Props> = ({ homePage }) => {
  const [modal, setModal] = useState<string>('');

  return (
    <DashboardPage>
      <DashboardHeader title="Homepage" description="Here you can manage your homepage setup." handleModal={setModal} />
      <TableMaker content={homePage} handleModal={setModal} headers={homePageTableHeaders} />
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

  const homePage = await getHomepage();

  return {
    props: {
      homePage: JSON.parse(JSON.stringify(homePage))
    }
  };
};

export default DashboardHomePage;
