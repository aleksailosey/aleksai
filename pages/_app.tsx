import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import RouterContext from 'contexts/RouterContext';

import ScreenLoader from 'components/screenloader/screenloader';
import Head from 'next/head';
import Nav from 'components/nav/nav';
import Content from 'components/content/content';
import Left from 'components/left/left';

import 'styles/index.sass';
import 'styles/blob.css';

export default function App({ Component, pageProps }) {
  const [show, setShow] = useState<boolean>(true);

  const router = useRouter();
  const { pathname, push, replace } = router;

  const [path, setPath] = useState<string>(pathname);
  const [state, setState] = useState<object>({});
  const [language, setLanguage] = useState<string>('en');

  const pushPath = (path: string) => {
    push(path);
    setPath(path);
  };

  const replacePath = (path: string) => {
    replace(path);
    setPath(path);
  };

  useEffect(() => {
    router.beforePopState((event) => {
      pushPath(window.location.pathname);
      return true;
    });
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 700);
  }, []);

  return (
    <>
      <RouterContext.Provider
        value={{
          path,
          pushPath,
          replacePath,
          state,
          setState,
          language,
          setLanguage
        }}
      >
        <ScreenLoader {...{ show }} />
        <Head>
          <link rel='icon' href='/favicon.svg' />
        </Head>
        <Nav />
        <Content>
          <Left />
          <Component {...pageProps} />
        </Content>
      </RouterContext.Provider>
    </>
  );
}
