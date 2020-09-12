import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' src='/favicon.svg' alt='Letter "A" icon' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
