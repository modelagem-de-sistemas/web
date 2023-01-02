import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

  > nav {
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
