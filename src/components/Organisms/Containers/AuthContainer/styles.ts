import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  > header {
    justify-self: center;

    > img {
      width: 310px;
      margin-top: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    align-items: center;
    margin-left: 10rem;

    > header {
      display: flex;
      width: 600px;
      height: 588px;
      background-color: var(--first-color-lighten);
      border-radius: 1rem;
      padding-left: 1rem;

      > img {
        width: 390px;
        margin-top: 0;
      }
    }
  }
`;

export const FormsContainer = styled.div`
  position: relative;
  height: 368px;

  @keyframes animate {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @media screen and (min-width: 576px) {
    width: 348px;
    justify-self: center;
  }
`;
