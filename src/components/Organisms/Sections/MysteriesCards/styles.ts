import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';
import styled from 'styled-components';

export const Container = styled(TemplateContent)`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 2rem;
  }

  > header {
    width: 100%;
    display: flex;
    justify-content: center;
    
    h2 {
      font-size: var(--font-title);
    }
  }

  > main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media screen and (max-width: 900px){
      grid-template-columns: 1fr;
    }
  }
`;
