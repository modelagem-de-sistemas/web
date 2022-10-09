import { TemplateContent } from '@/components/Atoms/Layouts/Templates/styles';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - var(--navbar-size));
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(360deg, #000, transparent);

  @media screen and (max-width: 900px) {
    height: calc(100vh - var(--navbar-size));
  }
`;

export const Content = styled(TemplateContent)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex-direction: column;

  > * {
    max-width: 900px;
    margin-bottom: 2rem;
    width: 100%;
  }

  > header {
    display: flex;
    justify-content: center;
    flex-direction: column;

    > span {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.7rem;
      color: #fff;
      margin-bottom: 1rem;
      border-bottom: 0.1rem solid var(--color-primary);
      margin: 1rem auto;
    }

    > h1 {
      font-size: calc(var(--font-main-title) + 1rem);
      color: #fff;
      text-align: center;
      font-weight: 600;
    }

    > h2 {
      font-size: var(--font-main-subtitle);
      color: #fff;
      font-weight: 400;
      text-align: center;

      @media screen and (max-width: 900px) {
        font-size: 1rem;
      }
    }
  }

  > footer {
    color: #fff;
    display: flex;
    justify-content: center;

    strong {
      font-size: var(--font-main-description);
      font-weight: 500;
    }

    span {
      font-size: var(--font-main-description);
      margin-left: 0.5rem;
      color: #f0f0f0;
      font-weight: 400;
      transition: var(--transition);
    }

    a {
      font-size: var(--font-main-description);
      margin-left: 0.5rem;
      color: #f0f0f0;
      font-weight: 400;
      transition: var(--transition);

      &:hover {
        color: #fff;
        text-decoration: underline;
      }
    }


    @media screen and (max-width: 900px){
      flex-direction: column;
      text-align: center;

      > p{
        margin-bottom: 1rem;
      }
    }
  }
`;
