import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import styles from './styles.module.css';

function Contact() {
  return (
    <Layout title='Contact'>
      <SEO title='Contato' shouldExcludeTitleSuffix />
      <div className={styles.box}>
        <h1 className={styles.title}>Contact</h1>
      </div>
    </Layout>
  );
}

export default Contact;
