import React from 'react';
import { AppProps } from 'next/app';
import * as gtag from '@/services/Gtag';
import GlobalStyle from '@/styles/globals';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
