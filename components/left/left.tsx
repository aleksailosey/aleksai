import styles from './left.module.sass';
import * as classNames from 'classnames';

export default function Left({ path, pushPath, i18nData }) {
  return (
    <div id={styles.LeftWrap}>
      {[
        {
          name: i18nData.Home,
          path: '/'
        },
        {
          name: i18nData.Bookshelf,
          path: '/bookshelf'
        },
        {
          name: i18nData.Running,
          path: '/running'
        },
        {
          name: i18nData.FunStuff,
          path: '/stuff'
        },
        {
          name: i18nData.ContactMe,
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
