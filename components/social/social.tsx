import styles from './social.module.sass';

export default function Social({ path, link }) {
  return (
    <div className={styles.SocialCont} onClick={() => window.open(link)}>
      <img className={styles.SocialIcon} src={path} />
    </div>
  );
}
