import Head from "next/head";

export function SEO({ title, description }) {
  if (title === undefined) {
    title = "Vedant Lohbare";
  } else {
    title = title + " | Vedant Lohbare";
  }
  if (description === undefined) {
    description = "My personal website";
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content="www.vedantlohbare.com" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Vedant Lohbare" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      <meta name="google" content="notranslate" key="notranslate" />
    </Head>
  );
}
