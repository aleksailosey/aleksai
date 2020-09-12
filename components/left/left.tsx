import styles from './left.module.sass';

import PathContext from 'contexts/PathContext';
import { useContext } from 'react';

import * as classNames from 'classnames';

export default function Left() {
  const { path, setPath } = useContext(PathContext);

  return (
    <div id={styles.LeftWrap}>
      <div
        className={classNames({
          [styles.LeftItemCont]: true,
          [styles.LeftItemContActive]: path === '/'
        })}
        onClick={() => {
          setPath('/');
        }}
      >
        <span className={styles.LeftText}>Home</span>
      </div>
      <div
        className={classNames({
          [styles.LeftItemCont]: true,
          [styles.LeftItemContActive]: path === '/bookshelf'
        })}
        onClick={() => {
          setPath('/bookshelf');
        }}
      >
        <span className={styles.LeftText}>Bookshelf</span>
      </div>
      <div
        className={classNames({
          [styles.LeftItemCont]: true,
          [styles.LeftItemContActive]: path === '/running'
        })}
        onClick={() => {
          setPath('/running');
        }}
      >
        <span className={styles.LeftText}>Running</span>
      </div>
      <div
        className={classNames({
          [styles.LeftItemCont]: true,
          [styles.LeftItemContActive]: path === '/stuff'
        })}
        onClick={() => {
          setPath('/stuff');
        }}
      >
        <span className={styles.LeftText}>Fun stuff</span>
      </div>
      <div
        className={classNames({
          [styles.LeftItemCont]: true,
          [styles.LeftItemContActive]: path === '/contact'
        })}
        onClick={() => {
          setPath('/contact');
        }}
      >
        <span className={styles.LeftText}>Contact me</span>
      </div>
    </div>
  );
}
