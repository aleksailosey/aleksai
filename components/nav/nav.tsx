import styles from './nav.module.sass';
import Logo from 'components/logo/logo';
import Social from 'components/social/social';

export default function Nav() {
  return (
    <div id={styles.Nav}>
      <div id={styles.NavLeft}>
        <Logo />
      </div>
      <div id={styles.NavRight}>
        <Social path='/twitter.svg' link='https://twitter.com/aleksailosey' />
        <Social
          path='/strava.svg'
          link='https://www.strava.com/athletes/48447345'
        />
        <Social path='/github.svg' link='https://github.com/aleksailosey' />
      </div>
    </div>
  );
}
