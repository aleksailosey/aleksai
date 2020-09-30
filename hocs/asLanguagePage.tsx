import { Fragment, ReactNode } from 'react';
import isValidLanguage from 'helpers/isValidLanguage';

export default function asLanguagePage(page: Function) {
  return function (props) {
    const { loadingLanguage, language, changeLanguage } = props;
    if (loadingLanguage) return null;
    if (!isValidLanguage(language)) {
      changeLanguage('en');
      return null;
    }
    return page(props);
  };
}
