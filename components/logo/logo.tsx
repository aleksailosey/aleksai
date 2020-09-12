import styles from './logo.module.sass';

export default function Logo() {
  return (
    <div
      id={styles.LogoCont}
      onClick={() => {
        if (window.scrollTop > 5) {
          window.scollTop = 0;
        } else if (window.location.pathname !== '/') {
          window.location = '/';
        }
      }}
    >
      <span id={styles.Logo}>Aleksai Losey</span>
    </div>
  );
}
