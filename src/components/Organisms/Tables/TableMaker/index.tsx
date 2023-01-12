import React from 'react';
import { Container } from './styles';
import { camelCaseToOriginalCase } from '@/utils/helpers/string';
import { isDate, toDDMMYYYY } from '@/utils/helpers/time';
import TableButton from '@/components/Molecules/Buttons/TableButton';

interface Props {
  content: any[];
  handleModal: (modal: string) => void;
  headers: string[];
}

const TableMaker: React.FC<Props> = ({ content, handleModal, headers }) => {
  const formatData = (data: any) => {
    if (isDate(data)) {
      return toDDMMYYYY(new Date(data));
    }

    return data;
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {headers.map((key) => (
              <th>{camelCaseToOriginalCase(key)} </th>
            ))}
            <th> Update </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          {content.length > 0 ? (
            content.map((object: any) => (
              <tr>

                {Object.keys(object).map((_item: any, index: number) => {

                  if (object[headers[index]])
                    return (
                      <td data-label={headers[index]}> {formatData(object[headers[index]].toString())} </td>
                    );
                }
                )}

                <td data-label="Update" onClick={() => handleModal('update')}>
                  <TableButton>Update</TableButton>
                </td>
                <td data-label="Delete" onClick={() => handleModal('delete')}>
                  <TableButton>Delete</TableButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length + 2}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default TableMaker;
