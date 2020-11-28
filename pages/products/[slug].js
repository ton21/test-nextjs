import React from 'react';
import { useRouter } from 'next/router';

import { client } from '../../lib/prismic';
import Link from 'next/link';
import Image from 'next/image';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

import { ProductImageContainer } from '../../styles/pages/Product';

function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <h1> {PrismicDOM.RichText.asText(product.data.titulo)} </h1>
      <ProductImageContainer>
        <Image
          className='product-image'
          src={product.data.thumbnail.url}
          alt='sss'
          width={400}
          height={400}
        />
      </ProductImageContainer>
      <article
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(product.data.descricao),
        }}
      ></article>
    </>
  );
}

export const getStaticPaths = async () => {
  const products = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);

  // console.log(products);

  // const paths = products.results.map((product) => {
  //   return {
  //     params: {
  //       slug: product.uid,
  //     },
  //   };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  // pega a categoria selecionada, de acordo com o slug passado na url
  const product = await client().getByUID('product', String(slug), {});
  console.log('Produtosss: ', product);

  // retorna categoria e produtos
  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};

export default Product;
