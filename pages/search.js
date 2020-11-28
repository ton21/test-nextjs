import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { client } from '../lib/prismic';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

const Search = ({ searchResults }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(search)}`);

    // limpa campo de busca apos busca
    setSearch('');
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.uid}`}>
              <a>{PrismicDOM.RichText.asText(item.data.titulo)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { q } = context.query;
  if (!q) {
    return {
      props: {
        searchResults: [],
      },
    };
  }
  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.fulltext('my.product.titulo', String(q)),
  ]);
  return {
    props: {
      searchResults: searchResults.results,
    },
  };
};

export default Search;
