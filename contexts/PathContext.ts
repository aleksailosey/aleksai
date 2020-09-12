import { createContext } from 'react';

const PathContext = createContext({
  path: '/',
  setPath: (path: string) => {}
});

export default PathContext;
