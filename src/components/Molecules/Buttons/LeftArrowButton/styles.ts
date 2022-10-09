import styled from 'styled-components';

interface Props {
  darkTheme?: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  padding: 0.45rem;
  border-radius: 90%;
  background-color: transparent;
  z-index: 999;
  color: ${props => (props.darkTheme ? '#f0f0f0' : '#000')};
  margin: auto 0;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    filter: brightness(0.5);
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    filter: brightness(0.5);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
