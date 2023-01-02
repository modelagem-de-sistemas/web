import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0 4rem;

  &__title {
    font-size: var(--h1-font-size);
    color: var(--title-color);
  }
  &__subtitle {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
  }

  &__title,
  &__subtitle {
    text-align: center;
  }
`;
