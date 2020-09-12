import styles from './area.module.sass';

type AreaProps = {
  title: string;
  description?: string;
  children?: any;
};

export default function Area({ title, description, children }: AreaProps) {
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
