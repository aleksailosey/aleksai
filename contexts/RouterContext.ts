import { createContext } from 'react';

const PathContext = createContext({
  path: '/',
  pushPath: (path: string) => {},
  replacePath: (path: string) => {},
  state: {},
  setState: (state: object) => {},
  language: 'en',
  setLanguage: (language: string) => {}
});

export default PathContext;
