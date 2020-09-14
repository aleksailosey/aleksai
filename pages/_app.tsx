import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import RouterContext from 'contexts/RouterContext';

import MobileMenu from 'components/mobilemenu/mobilemenu';
import Head from 'next/head';
import Nav from 'components/nav/nav';
import Content from 'components/content/content';
import Left from 'components/left/left';

import { State } from 'types/State';

import 'styles/index.sass';
import 'styles/blob.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname, push, replace } = router;

  const [path, setPath] = useState<string>(pathname);
  const [state, setState] = useState<State>({});
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

  return (
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
      <MobileMenu {...{ show: state.mobileMenu }} />
      <Head>
        <link rel='icon' href='/favicon.svg' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-143197236-6'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-143197236-6');
                  `
          }}
        />
      </Head>
      <Nav />
      <Content>
        <Left />
        <Component {...pageProps} />
      </Content>
    </RouterContext.Provider>
  );
}
