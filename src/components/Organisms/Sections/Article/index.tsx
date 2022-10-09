import { Section } from '@/components/Atoms/Layouts/Templates/styles';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Container } from './styles';

interface Props {
  content: string; 
}

const Article: React.FC<Props> = props => {
  return (
    <Section noPadding>
      <Container>{ReactHtmlParser(props.content)}</Container>;
    </Section>
  );
};

export default Article;
