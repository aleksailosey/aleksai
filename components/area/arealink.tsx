import useRouter from 'hooks/useRouter';
import styles from './area.module.sass';

type LinkProps = {
  text: string;
  link: string;
  local?: boolean;
};

export default function AreaLink({ text, link, local }: LinkProps) {
  const { pushPath } = useRouter();
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
