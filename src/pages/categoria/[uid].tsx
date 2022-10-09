import React from 'react';
import LandingPage from '@/components/Templates/Layouts/LandingPage';
import { GetStaticPaths, GetStaticProps } from 'next';
import { articles } from '@/constants/Components/Articles';
import Metatags from '@/components/Templates/Seo/Metatags';
import { mysteries } from '@/constants/Components/MysteriesCards';
import CategoryBanner from '@/components/Organisms/Sections/CategoryBanner';
import { Section } from '@/components/Atoms/Layouts/Templates/styles';
import Articles from '@/components/Organisms/Lists/Articles';

interface Props {
  posts: Article[];
  mystery: Mystery;
}

const CategoryPage: React.FC<Props> = props => {
  return (
    <LandingPage>
      <Metatags
        title={props.mystery.title}
        description={props.mystery.subtitle}
        image={props.mystery.image}
        url={`/categoria/${props.mystery.uid}`}
      />

      <CategoryBanner category={props.mystery} />

      <Section>
        <Articles articles={props.posts} />
      </Section>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mystery = await mysteries.find(mystery => mystery.uid === params.uid);

  const posts = await articles.every(article => article.uid === mystery.uid);

  return {
    props: {
      posts: posts,
      mystery
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mysteries.map(mystery => {
    return {
      params: {
        uid: mystery.uid
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export default CategoryPage;
