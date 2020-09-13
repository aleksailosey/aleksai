import styles from './screenloader.module.sass';

export default function ScreenLoader({ show }) {
  return !show ? <div id={styles.ScreenLoader}></div> : null;
}
