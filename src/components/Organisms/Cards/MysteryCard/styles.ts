import styled from 'styled-components';

interface Props {
  image: string;
}

export const Container = styled.a<Props>`
  width: 100%;
  aspect-ratio: 3/4;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: var(--border-radius);

  background: url(${props => props.image}) no-repeat;
  background-size: cover;
  transition: var(--transition);

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 900px) {
    aspect-ratio: 4/3;
  }
`;

export const Content = styled.div`
  backdrop-filter: brightness(50%);
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  color: #fff;

  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  > h3 {
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;
  }

  > p {
    font-weight: 300;
    text-align: center;
    font-size: 0.8rem;
  }
`;
