import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;

  > table {
    width: 100%;
    border-collapse: collapse;

    td {
      padding: 1.5rem;
      border: 1px solid #eee;
      text-align: center;
      font-size: 16px;
      color: #444;
    }

    th {
      padding: 1rem;
      border: 1px solid #dee2e6;
      text-align: center;
      font-size: 16px;
      background-color: var(--first-color-lighten);
      color: #444;
    }

    tbody {
      tr {
        &:nth-child(even) {
          background-color: #f5f5f5;
        }
      }
    }
  }

  @media (max-width: 768px) {
    table {
      thead {
        display: none;
      }
      display: block;
      width: 100%;

      tbody {
        display: block;
        width: 100%;
      }

      tr {
        display: block;
        width: 100%;
        margin-bottom: 15px;
      }

      td {
        display: block;
        width: 100%;
        text-align: right;
        padding-left: 50%;
        text-align: right;
        position: relative;

        &::before {
          content: attr(data-label);
          position: absolute;
          left: 0;
          width: 50%;
          padding-left: 15px;
          font-size: 15px;
          font-weight: bold;
          text-align: left;
        }
      }
    }
  }
`;
