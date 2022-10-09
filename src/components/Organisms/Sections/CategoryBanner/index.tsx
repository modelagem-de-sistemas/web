import { SectionImage } from '@/components/Atoms/Layouts/Templates/styles';
import MainSearch from '@/components/Molecules/SearchItems/MainSearch';
import { searches } from '@/constants/Components/Searches';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';
import React from 'react';

import { Container, Content } from './styles';

interface Props {
  category: Mystery;
} 

const CategoryBanner: React.FC<Props> = props => {
  return (
    <SectionImage
      noPadding
      positionAdapted="top center"
      background={props.category.image}
    >
      <Container>
        <Content>
          <header>
            <h1>{props.category.title}</h1>
            <h2>{props.category.subtitle}</h2>
          </header>
        </Content>
      </Container>
    </SectionImage>
  );
};

export default CategoryBanner;
