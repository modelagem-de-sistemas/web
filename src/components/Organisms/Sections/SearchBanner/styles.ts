import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';
import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: brightness(70%);

  @media screen and (max-width: 900px){
    height: calc(100vh - var(--navbar-size));
  }
`;

export const Content = styled(TemplateContent)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: -1rem;

  > * {
    max-width: 800px;
    margin-top: 1rem;
    width: 100%;
  }

  > header {
    > h1 {
      font-size: var(--font-main-title);
      color: #fff;
      font-weight: 600;
    }

    > h2 {
      font-size: var(--font-main-subtitle);
      color: #fff;
      font-weight: 400;
    }
  }

  > footer {
    color: #fff;

    strong {
      font-size: var(--font-main-description);
      font-weight: 500;
    }

    a{
      font-size: var(--font-main-description);
      margin-left: 0.5rem;
      color: #f0f0f0;
      font-weight: 300;
      transition: var(--transition);
      
      &:hover{
        color: #fff;
        text-decoration: underline;
      }
    }
  }
`;
