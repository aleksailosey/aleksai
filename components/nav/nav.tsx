import styles from './nav.module.sass';
import Logo from 'components/logo/logo';
import Social from 'components/social/social';

import useRouter from 'hooks/useRouter';

export default function Nav() {
  const { setState } = useRouter();

  return (
    <div id={styles.Nav}>
      <div id={styles.NavLeft}>
        <Logo />
      </div>
      <div id={styles.NavRight}>
        <div id={styles.NavRightSocialIcons}>
          <Social path='/twitter.svg' link='https://twitter.com/aleksailosey' />
          <Social
            path='/strava.svg'
            link='https://www.strava.com/athletes/48447345'
          />
          <Social path='/github.svg' link='https://github.com/aleksailosey' />
        </div>
        <img
          id={styles.MenuIcon}
          src='/menu.svg'
          onClick={() => setState({ mobileMenu: true })}
        />
      </div>
    </div>
  );
}
