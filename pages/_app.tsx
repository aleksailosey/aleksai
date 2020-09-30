import { Fragment, useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

import ConditionalShow from 'components/conditionalshow/conditionalshow';
import MobileMenu from 'components/mobilemenu/mobilemenu';
import Head from 'next/head';
import Nav from 'components/nav/nav';
import Content from 'components/content/content';
import Left from 'components/left/left';
import ScrollTop from 'components/scrolltop/scrolltop';

import { State } from 'types/State';
import { Language } from 'types/Language';

import LanguageSelector from 'components/languageselector/languageselector';
import styles from 'components/area/area.module.sass';

import 'styles/index.sass';
import 'styles/blob.css';

import NProgress from 'nprogress';
import 'styles/nprogress.css';

NProgress.configure({
  showSpinner: false
});

(Router as any).onRouteChangeStart = () => {
  NProgress.set(0);
};

(Router as any).onRouteChangeComplete = () => {
  NProgress.set(1);
};

(Router as any).onRouteChangeError = () => {
  NProgress.set(1);
};

export default function App({ Component, pageProps }) {
  const {
    pathname,
    push,
    replace,
    query: { language: languageQuery }
  } = useRouter();

  // Used for agnostic reference in pages
  const path =
    pathname === '/[language]' ? '/' : pathname.replace('/[language]', '');

  const [state, setState] = useState<State>({});
  const [loadingLanguage, setLoadingLanguage] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>(
    (languageQuery as string) || 'en'
  );

  useEffect(() => {
    if (typeof (languageQuery as string) !== 'undefined') {
      setLanguage(languageQuery as string);

      setLoadingLanguage(false);
    }
  }, [languageQuery]);

  const pathOperation = (newPath: string, type: string) => {
    var operation: Function;
    switch (type) {
      case 'replace':
        operation = replace;
        break;
      case 'push':
      default:
        operation = push;
    }
    const options = {
      shallow: true
    };
    if (language === 'en') {
      operation(newPath, newPath, options);
    } else {
      const replacement = newPath === '/' ? '' : newPath;
      operation(
        `/[language]${replacement}`,
        `/${language}${replacement}`,
        options
      );
    }
  };

  const pushPath = (path: string) => {
    pathOperation(path, 'push');
  };

  const replacePath = (path: string) => {
    pathOperation(path, 'replace');
  };

  const changeLanguage = (newLanguage: Language) => {
    if (language === newLanguage) return;
    const replacement = path === '/' ? '' : path;
    if (newLanguage === 'en') {
      replace(path);
    } else {
      replace(`/[language]${replacement}`, `/${newLanguage}${replacement}`);
    }
    setLanguage(newLanguage);
  };

  var i18nData = {};
  try {
    i18nData = require(`../i18n/${language}/index`).default;
  } catch (_) {}

  return (
    <ConditionalShow {...{ pathname, loadingLanguage }}>
      <ScrollTop {...{ path, language }} />
      <MobileMenu
        {...{ show: state.mobileMenu, path, pushPath, setState, i18nData }}
      />
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
      <Nav {...{ path, pushPath, setState }} />
      <Content>
        <Left {...{ path, pushPath, i18nData }} />
        <div id='AppWrap'>
          <div id={styles.AreaLanguageContainer}>
            <LanguageSelector {...{ path, language, changeLanguage }} />
          </div>
          <Component
            {...{
              loadingLanguage,
              language,
              changeLanguage,
              path,
              pushPath,
              replacePath,
              i18nData,
              state,
              setState
            }}
          />
        </div>
      </Content>
    </ConditionalShow>
  );
}
