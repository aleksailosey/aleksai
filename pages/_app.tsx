import Head from 'next/head';
import Nav from 'components/nav/nav';
import Content from 'components/content/content';
import Left from 'components/left/left';

import 'styles/blob.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Nav />
      <Content>
        <Left />
        <Component {...pageProps} />
      </Content>
    </>
  );
}
