import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Nav from './Nav';

function Layout({ children, title }) {
  return (
    <>
      <Nav />
      <div className='main'>
        {children}
        <style jsx>
          {`
            .main {
              padding: 0 2rem;
              max-width: 80rem;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Layout;
