import Head from 'next/head';
import Area from 'components/area/area';

export default function Home({ path, language, changeLanguage, i18nData }) {
  return (
    <>
      <Head>
        <title>{i18nData.ContactMe} | Aleksai Losey</title>
      </Head>
      <Area
        title={i18nData.ContactMe}
        descriptionMarkDown={
          <span>
            <span>{i18nData.alwaysAvailableToTalk} </span>
            <a href='mailto:aleksailosey@gmail.com' target='__blank'>
              aleksailosey@gmail.com
            </a>
            <span>. {i18nData.youCanAlso} </span>
            <a
              href='https://twitter.com/messages/compose?recipient_id=1196260254461259776'
              target='__blank'
            >
              DM {i18nData.meOn} Twitter
            </a>
            <span>.</span>
          </span>
        }
        {...{
          path,
          language,
          changeLanguage
        }}
      ></Area>
    </>
  );
}
