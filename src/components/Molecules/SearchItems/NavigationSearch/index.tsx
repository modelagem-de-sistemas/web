import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

const NavigationSearch: React.FC = () => {
  const [searchContent, setSearchContent] = useState<string>('');

  const submit = useCallback(
    (e: any): void => {
      e.preventDefault();
      if (searchContent.length > 0) {
        alert('pesquisa em construção');
      }
    },
    [searchContent]
  );

  return (
    <Container onSubmit={e => submit(e)} >
      <input
        value={searchContent}
        onChange={e => setSearchContent(e.target.value)}
        placeholder="Pesquisar"
      />
      <button type='submit'>
        <FaSearch color="#000" />
      </button>
    </Container>
  );
};

export default NavigationSearch;
