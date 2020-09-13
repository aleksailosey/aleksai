import styles from './area.module.sass';

export default function AreaLink({ text, link }) {
  return (
    <div className={styles.AreaLinkCont}>
      <a className={styles.AreaLink} href={link} target='__blank'>
        {text}
      </a>
    </div>
  );
}
