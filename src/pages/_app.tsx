import React from 'react';
import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppConfig } from '@/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
