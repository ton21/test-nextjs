import React from 'react';
import { useRouter } from 'next/router';
import { client } from '../../lib/prismic';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

function Category({ category, products }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h1>{PrismicDOM.RichText.asText(category.data.titulo)}</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.uid}`}>
              <a>{PrismicDOM.RichText.asText(item.data.titulo)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticPaths = async () => {
  const categories = await client().query([
    Prismic.Predicates.at('document.type', 'category'),
  ]);

  const paths = categories.results.map((cat) => {
    return {
      params: {
        slug: cat.uid,
      },
    };
  });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  // pega a categoria selecionada, de acordo com o slug passado na url
  const category = await client().getByUID('category', String(slug), {});

  // pega todos os produtos que estão na categoria selecionada
  const products = await client().query([
    Prismic.Predicates.at('document.type', 'product'), // seleciona o documento

    // seleciona os itens que estão no campo 'category' do produto, necessário passar o id da categoria neste caso
    // esse é o campo relacionamento inserido no produto
    Prismic.Predicates.at('my.product.category', category.id),
  ]);

  // retorna categoria e produtos
  return {
    props: {
      category,
      products: products.results,
    },
    revalidate: 60,
  };
};

export default Category;
