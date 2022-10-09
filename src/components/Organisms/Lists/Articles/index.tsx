import React from 'react';
import ArticleCard from '../../Cards/ArticleCard';

import { Container, Message } from './styles';

interface Props {
  articles: Article[];
}

const Articles: React.FC<Props> = props => {
  return (
    <Container>
      <main>
        {props.articles.length > 0 ? (
          props?.articles?.map(article => (
            <ArticleCard key={article.uid} article={article} />
          ))
        ) : (
          <Message>
            <p>
              Que pena, nenhum texto encontrado nessa categoria, mas nada está perdido, você
              pode tentar em uma outra categoria.
            </p>
          </Message>
        )}
      </main>
      <aside></aside>
    </Container>
  );
};

export default Articles;
