import { Fragment, ReactNode } from 'react';

export default function asRootPage(page: Function) {
  return function (props) {
    return page({
      ...props,
      language: 'en'
    });
  };
}
