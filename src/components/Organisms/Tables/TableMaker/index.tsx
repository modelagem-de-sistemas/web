import React from 'react';
import { Container } from './styles';
import { camelCaseToOriginalCase } from '@/utils/helpers/string';
import { isDate, toDDMMYYYY } from '@/utils/helpers/time';
import TableButton from '@/components/Molecules/Buttons/TableButton';

interface Props {
  content: any[];
  handleModal: (modal: string) => void;
}

const TableMaker: React.FC<Props> = ({ content, handleModal }) => {
  const formatData = (data: any) => {
    if (isDate(data)) {
      return toDDMMYYYY(new Date(data));
    }

    return data;
  };

  const headers = Object.keys(content[0]);

  return (
    <Container>
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

              <td data-label="Update" onClick={() => handleModal('update')}>
                <TableButton>Update</TableButton>
              </td>
              <td data-label="Delete" onClick={() => handleModal('delete')}>
                <TableButton>Delete</TableButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TableMaker;
