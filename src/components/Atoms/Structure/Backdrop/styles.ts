import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#0009' : 'transparent')};
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  margin: 0;
  z-index: 10;
  top: 0;
  left: 0;
  transition: var(--transition);
`;
