import Head from 'next/head';
import Nav from 'components/nav/nav';
import Content from 'components/content/content';
import Left from 'components/left/left';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PathContext from 'contexts/PathContext';

import 'styles/blob.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname, push } = router;
  const [path, setPath] = useState(pathname);

  const pushPath = (path: string) => {
    push(path);
    setPath(path);
  };

  useEffect(() => {
    router.beforePopState((event) => {
      pushPath(window.location.pathname);
    });
  });

  return (
    <PathContext.Provider value={{ path, setPath: pushPath }}>
      <Head>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Nav />
      <Content>
        <Left />
        <Component {...pageProps} />
      </Content>
    </PathContext.Provider>
  );
}
