import useRouter from 'hooks/useRouter';
import Head from 'next/head';
import Area from 'components/area/area';
import styles from 'components/area/area.module.sass';

export default function Home() {
  const { path, pushPath } = useRouter();

  return (
    <>
      <Head>
        <title>Aleksai Losey</title>
      </Head>
      <Area
        title='Home'
        descriptionMarkDown={
          <span>
            <span>
              Hey! My name is Aleksai Losey. I'm currently a university student.
              I like to code, run, and rock climb. Check out some{' '}
            </span>
            <span
              className={styles.vLink}
              onClick={() => pushPath('/bookshelf')}
            >
              books I'm reading
            </span>
            <span>, </span>
            <span className={styles.vLink} onClick={() => pushPath('/running')}>
              some running photos
            </span>
            <span>, or </span>
            <span className={styles.vLink} onClick={() => pushPath('/stuff')}>
              my link collection
            </span>
            <span>.</span>
          </span>
        }
      />
    </>
  );
}
