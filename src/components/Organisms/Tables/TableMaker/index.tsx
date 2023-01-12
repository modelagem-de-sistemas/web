import React from 'react';
import { Container, TableButton } from './styles';
import api from '@/services/apis';
import { camelCaseToOriginalCase } from '@/utils/helpers/string';
import { isDate, toDDMMYYYY } from '@/utils/helpers/time';
import Link from 'next/link';

interface Props {
  content: any[];
  apiPath: string;
}

const TableMaker: React.FC<Props> = ({ content, apiPath }) => {
  const createPath = `create`;
  const updatePath = (id: string) => id;

  const handleDelete = (id: number) => {
    api
      .delete(`/${apiPath}/${id}`)
      .then((success) => {
        alert(success.data);
      })
      .catch((err) => alert(err));
  };

  const formatData = (data: any) => {
    if (isDate(data)) {
      return toDDMMYYYY(new Date(data));
    }

    return data;
  };

  const headers = Object.keys(content[0]);

  return (
    <Container>
      <header>
        <Link href={createPath} passHref>
          <TableButton>Create</TableButton>
        </Link>
      </header>

      <main>
        <table>
          <thead>
            <tr>
              {headers.map((headerItem) => (
                <th>{camelCaseToOriginalCase(headerItem)} </th>
              ))}
              <th> Update </th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {content.map((object: any) => (
              <tr>
                {Object.keys(object).map((item: any, index: number) => (
                  <td data-label={headers[index]}> {formatData(object[item].toString())} </td>
                ))}

                <td data-label="Update">
                  <TableButton>Update</TableButton>
                </td>
                <td data-label="Delete" onClick={() => handleDelete(object['id'])}>
                  <TableButton>Delete</TableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
};

export default TableMaker;
