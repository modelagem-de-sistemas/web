import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';
import styled from 'styled-components';

export const Container = styled(TemplateContent)`
  margin: 0 auto;
  max-width: 900px;

  > * {
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1rem;
  }
`;
