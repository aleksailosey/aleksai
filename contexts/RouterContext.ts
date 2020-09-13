import { createContext } from 'react';

const PathContext = createContext({
  path: '/',
  pushPath: (path: string) => {},
  replacePath: (path: string) => {},
  state: {},
  setState: {},
  language: 'en'
});

export default PathContext;
