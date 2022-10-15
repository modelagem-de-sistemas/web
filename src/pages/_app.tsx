import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { App } from '@/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{App.title}</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
