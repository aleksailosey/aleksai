import Head from 'next/head';
import Area from 'components/area/area';
import AreaLink from 'components/area/arealink';

const sections = [
  {
    text: 'Home',
    link: '/',
    local: true
  },
  {
    text: 'Bookshelf',
    link: '/bookshelf',
    local: true
  },
  {
    text: 'Running',
    link: '/running',
    local: true
  },
  {
    text: 'Fun stuff',
    link: '/stuff',
    local: true
  },
  {
    text: 'Contact me',
    link: '/contact',
    local: true
  }
];

export default function _404({
  pushPath,
  i18nData,
  path,
  language,
  changeLanguage
}) {
  return (
    <>
      <Head>
        <title>404: {i18nData.pageNotFound}</title>
      </Head>
      <Area
        title={`404: ${i18nData.pageNotFound}`}
        description={i18nData.pageNotFoundDescription}
        {...{
          path,
          language,
          changeLanguage
        }}
      >
        {sections.map((section) => {
          const { text, link, local } = section;
          return (
            <AreaLink
              key={link}
              {...{
                text,
                link,
                local,
                pushPath
              }}
            />
          );
        })}
      </Area>
    </>
  );
}
