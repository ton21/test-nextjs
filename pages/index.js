import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import SEO from '../components/SEO';
import { client } from '../lib/prismic';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';

const Home = ({ users, recommendedProducts }) => {
  return (
    <Layout>
      <div>
        <SEO title='My Website' description='lorem ipsum' />
        <h1>Products</h1>
        <ul className='users-list'>
          {/* {users.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/about/[id]`} as={`/about/${id}`}>
                <a title={name}>{name}</a>
              </Link>
            </li>
          ))} */}
          <li>
            {recommendedProducts.map((item) => (
              <li key={item.id}>
                <Link href={`products/${item.uid}`}>
                  <a>{PrismicDOM.RichText.asText(item.data.titulo)}</a>
                </Link>
              </li>
            ))}
          </li>
        </ul>
        <style jsx>
          {`
            .users-list li {
              font-family: 'Poppins', sans-serif;
              color: #555;
              display: block;
              font-size: 14px;
            }
            .users-list li a {
              color: #555;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     return {
//       props: {
//         users,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getStaticProps = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);
  return {
    props: {
      recommendedProducts: recommendedProducts.results,
      revalidate: 60,
    },
  };
};

export default Home;
