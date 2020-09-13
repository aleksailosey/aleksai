import { createContext } from 'react';
import { State } from 'types/State';

const PathContext = createContext({
  path: '/',
  pushPath: (path: string) => {},
  replacePath: (path: string) => {},
  state: {},
  setState: (state: State) => {},
  language: 'en',
  setLanguage: (language: string) => {}
});

export default PathContext;
