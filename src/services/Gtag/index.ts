// @ts-ignore
export const GA_TRACKING_ID = 'G-0WD1B3RDLF';

export const pageview = (url: URL): void => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    });
  }
};
