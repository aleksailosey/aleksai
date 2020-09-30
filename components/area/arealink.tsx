import styles from './area.module.sass';

type LinkProps = {
  text: string;
  link: string;
  pushPath: Function;
  local?: boolean;
};

export default function AreaLink({ text, link, local, pushPath }: LinkProps) {
  return (
    <div className={styles.AreaLinkCont}>
      {local ? (
        <span className={styles.AreaLink} onClick={() => pushPath(link)}>
          {text}
        </span>
      ) : (
        <a className={styles.AreaLink} href={link} target='__blank'>
          {text}
        </a>
      )}
    </div>
  );
}
