import styled from 'styled-components';

interface Props {
  background?: string;
}

export const TemplateContainer = styled.div<Props>`
  width: 100%;
  min-height: calc(100vh - var(--navbar-size));
  background: ${props => (props.background ? props.background : 'none')};
  display: flex;
  flex-direction: column;
`;

interface SectionProps {
  background?: string;
  positionAdapted?: string;
  marginBottom?: string;
  marginTop?: string;
  noPadding?: boolean;
  size?: string;
}

export const Section = styled.div<SectionProps>`
  border: none;
  width: 100%;
  overflow: visible;
  background: ${props => (props.background ? props.background : 'none')};
  background-size: cover;
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}
  ${props => !props.noPadding && 'padding: 2rem 0;'}
`;

export const SectionImage = styled.div<SectionProps>`
  border: none;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  background: url(${props => props.background}) no-repeat;
  background-position: ${props =>
    props.positionAdapted ? props.positionAdapted : 'top'};
  background-size: ${props => (props.size ? props.size : 'cover')};
`;

interface ContentProps {
  mobileFlex?: boolean;
}

export const TemplateContent = styled.div<ContentProps>`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 5rem;

  @media screen and (max-width: 900px) {
    padding: ${props => (props.mobileFlex ? '0' : '1rem')};
  }
`;
