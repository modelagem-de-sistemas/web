import { SectionImage } from '@/components/Atoms/Layouts/Templates/styles';
import MainSearch from '@/components/Molecules/SearchItems/MainSearch';
import { searches } from '@/constants/Components/Searches';
import Link from 'next/link';
import React from 'react';

import { Container, Content } from './styles';

const SearchBanner: React.FC = () => {
  return (
    <SectionImage
      noPadding
      positionAdapted="center center"
      background="https://misteriosdorosario.s3.amazonaws.com/Fixed/main.webp"
    >
      <Container>
        <Content>
          <header>
            <h1>Mistérios do Rosário</h1>
            <h2>
              Textos e meditações de santos católicos sobre o rosário e seus
              mistérios: gozosos, dolorosos, gloriosos e luminosos.
            </h2>
          </header>
          <main>
            <MainSearch />
          </main>
          <footer>
            <p>
              <strong>Pesquisar por: </strong>
              {searches.map(item => (
                <Link href={item.url} key={item.url}>
                  <a href={item.url}>{item.title}</a>
                </Link>
              ))}
            </p>
          </footer>
        </Content>
      </Container>
    </SectionImage>
  );
};

export default SearchBanner;
