import React from 'react';
import LandingPage from '@/components/Templates/Layouts/LandingPage';
import ArticleBanner from '@/components/Organisms/Sections/ArticleBanner';
import { GetStaticPaths, GetStaticProps } from 'next';
import { articles } from '@/constants/Components/Articles';
import Article from '@/components/Organisms/Sections/Article';
import Metatags from '@/components/Templates/Seo/Metatags';

interface Props {
  post: Article;
}

const ArticlePage: React.FC<Props> = props => {
  return (
    <LandingPage>
      <Metatags
        title={props.post.title}
        description={props.post.subtitle}
        image={props.post.image}
        url={`/artigo/${props.post.uid}`}
      />

      <ArticleBanner article={props.post} />

      <Article content={props.post.content} />
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = articles.find(item => item.uid === params.uid);

  return {
    props: {
      post
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map(article => {
    return {
      params: {
        uid: article.uid
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export default ArticlePage;
