import { SectionImage } from '@/components/Atoms/Layouts/Templates/styles';
import MainSearch from '@/components/Molecules/SearchItems/MainSearch';
import { searches } from '@/constants/Components/Searches';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';
import React from 'react';

import { Container, Content } from './styles';

interface Props {
  article: Article;
} 

const ArticleBanner: React.FC<Props> = props => {
  const windowWidth = useWindowSize().width;

  return (
    <SectionImage
      noPadding
      positionAdapted="top center"
      background={props.article.image}
    >
      <Container>
        <Content>
          <header>
            <h1>{props.article.title}</h1>
            <h2>{props.article.subtitle}</h2>
          </header>
          <footer>
            <p>
              <strong>Categoria: </strong>
              <span> {props.article.category}</span>
            </p>
            {windowWidth > 900 && <span>{' | '}</span>}
            <a href={props.article.link} target="_blank" rel="noreferrer">
              <span>
                {props.article.book} - {props.article.author}
              </span>
            </a>
          </footer>
        </Content>
      </Container>
    </SectionImage>
  );
};

export default ArticleBanner;
