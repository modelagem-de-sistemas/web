import styled from 'styled-components';
import { TemplateContainer, Section } from '@/components/Atoms/Layouts/Templates/styles';

export const Container = styled(TemplateContainer)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

export const NavbarSection = styled(Section)`
  position: sticky;
  z-index: 1002;
  top: 0px;
  background: #333;
  box-shadow: 0 1px 2px -2px grey;
`;
