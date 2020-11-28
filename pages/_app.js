import App from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/pages/Global';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const MApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MApp;
