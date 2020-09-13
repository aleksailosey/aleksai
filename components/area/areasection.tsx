import styles from './area.module.sass';

export default function AreaSection({ title }) {
  return (
    <div className={styles.AreaSectionCont}>
      <span className={styles.AreaSectionTitle}>{title}</span>
    </div>
  );
}
