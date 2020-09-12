import styles from './left.module.sass';

import PathContext from 'contexts/PathContext';
import { useContext } from 'react';

import * as classNames from 'classnames';

export default function Left() {
  const { path, setPath } = useContext(PathContext);

  return (
    <div id={styles.LeftWrap}>
      {[
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Bookshelf',
          path: '/bookshelf'
        },
        {
          name: 'Running',
          path: '/running'
        },
        {
          name: 'Fun stuff',
          path: '/stuff'
        },
        {
          name: 'Contact me',
          path: '/contact'
        }
      ].map((elem) => {
        return (
          <div
            key={elem.name}
            className={classNames({
              [styles.LeftItemCont]: true,
              [styles.LeftItemContActive]: path === elem.path
            })}
            onClick={() => {
              setPath(elem.path);
            }}
          >
            <span className={styles.LeftText}>{elem.name}</span>
          </div>
        );
      })}
    </div>
  );
}
