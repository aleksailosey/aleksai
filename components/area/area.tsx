import styles from './area.module.sass';

export default function Area({ title, description, children }) {
  return (
    <div id={styles.AreaWrap}>
      <div id={styles.AreaTitleCont}>
        <span id={styles.AreaTitle}>{title}</span>
      </div>
      {description ? (
        <div id={styles.AreaDescriptionCont}>
          <span id={styles.AreaDescription}>{description}</span>
        </div>
      ) : null}
      {children}
    </div>
  );
}
