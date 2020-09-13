import { useContext } from 'react';
import RouterContext from 'contexts/RouterContext';

/**
 * @return RouterContext
 */
export default function useRouter() {
  return useContext(RouterContext);
}

/**
 *
 * @param   Comp
 * @return      wrapped component
 */
export function withPage(Comp: any) {
  return function (props: any) {
    return <Comp {...props} {...useRouter()} />;
  };
}
