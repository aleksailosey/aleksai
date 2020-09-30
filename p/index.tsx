import useRouter from 'hooks/useRouter';
import Head from 'next/head';
import Area from 'components/area/area';
import styles from 'components/area/area.module.sass';

export default function Home({
  pushPath,
  i18nData,
  path,
  language,
  changeLanguage
}) {
  return (
    <>
      <Head>
        <title>Aleksai Losey</title>
      </Head>
      <Area
        title={i18nData.Home}
        descriptionMarkDown={
          <span>
            <span>
              {i18nData.introName}. {i18nData.intro} {i18nData.checkOutSome}{' '}
            </span>
            <span
              className={styles.vLink}
              onClick={() => pushPath('/bookshelf')}
            >
              {i18nData.booksImReading}
            </span>
            <span>, </span>
            <span className={styles.vLink} onClick={() => pushPath('/running')}>
              {i18nData.someRunningPhotos}
            </span>
            <span>, {i18nData.or} </span>
            <span className={styles.vLink} onClick={() => pushPath('/stuff')}>
              {i18nData.myLinkCollection}
            </span>
            <span>. {i18nData.frontContactMe} </span>
            <span className={styles.vLink} onClick={() => pushPath('/contact')}>
              {i18nData.contactMe}
            </span>
            <span>.</span>
          </span>
        }
        {...{
          path,
          language,
          changeLanguage
        }}
      />
    </>
  );
}
