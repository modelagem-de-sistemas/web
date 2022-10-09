import React, { useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';
 
const MainSearch: React.FC = () => {
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
    <Container onSubmit={e => submit(e)}>
      <button>
        <FaSearch />
      </button>
      <input
        placeholder="Pesquisar..."
        value={searchContent}
        onChange={e => setSearchContent(e.target.value)}
      />
    </Container>
  );
};

export default MainSearch;
