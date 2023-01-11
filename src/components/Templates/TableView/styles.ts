import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px #000;


`;

export const Cell = styled.div`
  text-align: center;
  width: 100%;
  padding: .25rem 0;

  svg {
    cursor: pointer;    
  }
`;



