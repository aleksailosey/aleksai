import styles from './area.module.sass';

export default function Area({ title, children }) {
  return (
    <div id={styles.AreaWrap}>
      <div id={styles.AreaTitleCont}>
        <span id={styles.AreaTitle}>{title}</span>
      </div>
      {children}
    </div>
  );
}
