import styles from './nav.module.sass';

export default function Nav() {
  return (
    <div id={styles.Nav}>
      <div id={styles.NavLeft}>
        <span>Aleksai Losey</span>
      </div>
      <div id={styles.NavRight}></div>
    </div>
  );
}
