import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
