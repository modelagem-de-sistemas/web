import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 600px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  padding: 1rem;
`;

export const Content = styled.div`
  position: absolute;
  width: 90vw;
  max-width: 600px;
  padding: 0;
  background-color: #fff;
  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > header {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: var(--color-primary);
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #c7c7c7;

    padding: 1rem;

    > h3 {
      font-size: 1.1rem;
    }
  }

  > main {
    padding-top: 1rem;
    width: 100%;
    padding: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
