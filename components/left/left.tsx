import useRouter from 'hooks/useRouter';
import styles from './left.module.sass';
import * as classNames from 'classnames';

export default function Left() {
  const { path, pushPath } = useRouter();

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
              pushPath(elem.path);
            }}
          >
            <span className={styles.LeftText}>{elem.name}</span>
          </div>
        );
      })}
    </div>
  );
}
