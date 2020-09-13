import styles from './mobilemenu.module.sass';
import * as classNames from 'classnames';

import useRouter from 'hooks/useRouter';

export default function MobileMenu({ show }) {
  const { setState } = useRouter();

  return (
    <div
      id={styles.MobileMenu}
      className={classNames({
        [styles.MobileMenuHidden]: !show
      })}
    >
      <div id={styles.Header}>
        <div id={styles.HeaderLeft}></div>
        <div id={styles.HeaderRight}>
          <img
            id={styles.CloseIcon}
            src='/close.svg'
            onClick={() => setState({ mobileMenu: false })}
          />
        </div>
      </div>
    </div>
  );
}
