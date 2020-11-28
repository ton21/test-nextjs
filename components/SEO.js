import React from 'react';
import Head from 'next/head';

// import { Container } from './styles';

function SEO({
  title,
  description,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}) {
  const pageTitle = `${title} ${
    shouldExcludeTitleSuffix ? '| My website' : ''
  }`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      {!shouldIndexPage && <meta name='robots' content='noindex,nofollow' />}
    </Head>
  );
}

export default SEO;
