import type { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import DashboardPage from '@/components/Templates/DashboardPage';
import DashboardHeader from '@/components/Organisms/Containers/DashboardHeader';
import { getEducations } from '@/lib/education';
import TableMaker from '@/components/Organisms/Tables/TableMaker';
import { educationFormSchema, educationTableHeaders } from '@/utils/constants/components/Admin/Forms/Education';
import FormMaker from '@/components/Organisms/Forms/FormMaker';

import TableButton from '@/components/Molecules/Buttons/TableButton';
import ModalTemplate from '@/components/Organisms/Modals/ModalTemplate';
import api from '@/services/apis';

interface Props {
  educations: EducationData[];
}

const DashboardEducation: NextPage<Props> = ({ educations }) => {
  const [modal, setModal] = useState<string>('');
  const [id, setId] = useState<number | null>(null);

  useEffect( () => {

  }, [modal])
  
  const submitUpdate = async () => {
    if (!id) throw new Error("ID nao definido");
    console.log(educations[id]);
    return;

    try {
      const response = await api.put('/education', );  
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || error?.message);
    }
  }




  return (
    <DashboardPage>
  
      <DashboardHeader title="Educations" description="Here you can manage your educations." handleModal={setModal} />
      <TableMaker setId={setId} content={educations} handleModal={setModal} headers={educationTableHeaders} />
      

      {modal == "update" && id ? 
       <ModalTemplate
          title={"Educations"} 
          open={modal.length > 1 ? true : false}
          handleClose={() => {setModal('')}}
       >
          <FormMaker 
            onSubmit={submitUpdate} 
            data={educationFormSchema(educations[id])}
            SubmitComponent={ (submit, disabled) => (<TableButton> Salvar </TableButton>)}
          /> 
        </ModalTemplate>

      : 
        <h1> Teste </h1>}
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

  return {
    props: {
      educations: JSON.parse(JSON.stringify(educations))
    }
  };
};

export default DashboardEducation;
