import React from 'react';
import { Container, Content, Line, Cell } from './styles';
import { AiOutlineDelete  } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import api from '@/services/apis';
import { useRouter } from 'next/router'


interface Props {
  content: any[];
  type: string;
}

const TableView: React.FC<Props> = ({content, type} : Props) => {
  const router = useRouter()

  const handleDelete = (id: number) => {
    const result = confirm(`Tem certeza da deleção do item de ID ${id} ?`)
    
    let url;
    switch (type){
      case "education":
        url = "education/";
        break;
      case "jobs":
        url = "jobs/";
        break;
    }

    if (result){
        api.delete(`/${url}${id}`)
        .then(succes => {alert(succes.data)})
        .catch(err => alert(err));   
    }
  }

  const handleUpdate = (id: number) => {
    let url;
    switch (type){
      case "education":
        url = "educations/";
        break;
      case "jobs":
        url = "jobs/";
        break;
    }

    router.push(`${url}/${id}/update`);
  }

  return (
    content[0] != null && (
    <Container>
      <Content> 

        <Line>   
            {Object.keys(content[0]).map( (headerItem) => (
              <Cell> {headerItem} </Cell>
            ))}
            <Cell> Delete </Cell>
            <Cell> Update </Cell>

          </Line>  

          {content.map( (object: any) => (
            <Line>   

              {Object.keys(object).map( (item: any) => (
                <Cell> {object[item].toString()} </Cell>
              ))}
              
              <Cell onClick={() => handleDelete(object["id"])}> <AiOutlineDelete size={28}/> </Cell>
              <Cell onClick={() => handleUpdate(object["id"])}> <BsPencil size={24}/> </Cell>

            </Line> 
          ))}
      </Content>
    </Container>)
  );
};

export default TableView;
