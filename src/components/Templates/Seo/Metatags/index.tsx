import React from 'react';
import Head from 'next/head';
import { application } from '@/utils/Metadata';

interface Metatags {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  tags?: string;
}

const Metatags: React.FC<Metatags> = props => {
  return (
    <>
      <Head>
        <title>
          {props.title
            ? `${application.title} | ${props.title} `
            : application.title}
        </title>
        <meta
          name="description"
          content={
            props.description ? props.description : application.description
          }
        />
        <link rel="canonical" href={`${application.url}${props.url}`} />
        <meta httpEquiv="content-language" content="pt-BR" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <meta
          property="og:title"
          content={
            props.title
              ? `${application.title} | ${props.title} `
              : application.title
          }
        />
        <meta property="og:url" content={`${application.url}${props.url}`} />
        <meta
          property="og:description"
          content={
            props.description ? props.description : application.description
          }
        />
        <meta
          property="og:image"
          content={
            props.image
              ? props.image
              : application.image
          }
        />
        <meta property="og:url" content={`${application.url}${props.url}`} />
        <meta
          property="og:site_name"
          content={props.title ? props.title : application.title}
        />
        <meta property="fb:app_id" content="aap_id" />
        <meta
          name="keywords"
          content={`${props.tags && `${props.tags}, `} Mistérios do Rosário`}
        />
        <meta name="author" content={application.title} />

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`${application.url}${props.url}`} />
        <meta
          name="twitter:title"
          content={props.title ? props.title : application.title}
        />
        <meta
          name="twitter:description"
          content={
            props.description ? props.description : application.description
          }
        />
        <meta name="twitter:creator" content={application.title} />
        <meta
          name="twitter:image:src"
          content={
            props.image
              ? props.image
              : application.image
          }
        />
        <meta name="robots" content="follows" />
        <meta name="pinterest-rich-pin" content="false" />
        <meta
          name="copyright"
          content={`© ${new Date().getFullYear()} ${application.title}`}
        />
        <link
          rel="shortcut icon"
          href={application.image}
        />
      </Head>
    </>
  );
};

export default Metatags;
