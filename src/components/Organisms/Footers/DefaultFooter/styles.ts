import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';

import styled from 'styled-components';

export const Container = styled(TemplateContent)`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;

  p {
    color: #fff;
    font-weight: 300;
    margin-bottom: 0;
  }
  strong {
    font-weight: bold;
    color: #fff;
    margin-top: 1rem;
  }
`;
