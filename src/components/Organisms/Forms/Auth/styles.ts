import styled from 'styled-components';

export const AuthFormContainer = styled.form`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  background-color: var(--first-color-lighten);
  padding: 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  animation-duration: 0.4s;
  animation-name: animate;

  @media screen and (min-width: 1024px) {
    left: -11rem;
  }

  > h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ForgotPassword = styled.a`
  display: block;
  width: max-content;
  margin-left: auto;
  margin-top: 1rem;
  font-size: var(--small-font-size);
  font-weight: 600;
  color: var(--first-color-dark);
`;
