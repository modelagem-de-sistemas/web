import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.div<Props>`
  position: fixed;
  background-color: #fff;
  height: 100vh;
  top: 0;
  margin-top: var(--navbar-size);
  width: 100%;
  right: ${props => (props.active ? '0' : '-100%')};
  transition: var(--transition);
  border-top: #000 solid 1px;

  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    color: #000;
    text-align: center;
    padding: 1rem;
    transition: var(--transition);

    &:hover {
      transform: scale(1.1);
    }
  }
`;
