import Head from 'next/head';
import Area from 'components/area/area';
import AreaLink from 'components/area/arealink';

export default function _404({
  pushPath,
  i18nData,
  path,
  language,
  changeLanguage
}) {
  const sections = [
    {
      text: i18nData.Home,
      link: '/',
      local: true
    },
    {
      text: i18nData.Bookshelf,
      link: '/bookshelf',
      local: true
    },
    {
      text: i18nData.Running,
      link: '/running',
      local: true
    },
    {
      text: i18nData.FunStuff,
      link: '/stuff',
      local: true
    },
    {
      text: i18nData.ContactMe,
      link: '/contact',
      local: true
    }
  ];

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
