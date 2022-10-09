import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';
import styled from 'styled-components';

export const Container = styled(TemplateContent)`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const Message = styled.div`
  text-align: center;
  font-size: var(--font-subtitle);
`;
