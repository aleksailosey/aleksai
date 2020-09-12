import styles from './content.module.sass';

export default function Content({ children }) {
  return <div id={styles.Content}>{children}</div>;
}
