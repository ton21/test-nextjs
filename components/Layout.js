import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Layout({ children, title }) {
  return (
    <div className='main'>
      <Head>
        <title>{title}</title>
        <link
          key='1'
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header>
        <Link href='/'>
          <a title='Item'>Home</a>
        </Link>
        {/* <Link href='/about'>
          <a title='Item'>About</a>
        </Link> */}
        <Link href='/contact'>
          <a title='Item'>Contact</a>
        </Link>
      </header>
      {children}

      <style jsx>
        {`
          .main {
            padding: 2rem;
            max-width: 80rem;
            margin: 0 auto;
          }
          header {
            background-color: #f55;
            padding: 1rem;
            color: #fff;
            font-weight: bold;
            display: flex;
            justify-content: flex-start;
          }
          header a {
            text-decoration: none;
            color: #fff;
            display: block;
            margin-right: 10px;
            font-size: 16px;
            font-weight: 500;
          }
        `}
      </style>
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          body {
            color: #555;
            font-size: 16px;
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
