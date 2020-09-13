import styles from './mobilemenu.module.sass';
import * as classNames from 'classnames';

export default function MobileMenu({ show }) {
  return (
    <div
      id={styles.MobileMenu}
      className={classNames({
        [styles.MobileMenuHidden]: true
      })}
    ></div>
  );
}
