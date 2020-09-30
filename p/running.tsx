import Head from 'next/head';
import Area from 'components/area/area';
import AreaImage from 'components/area/areaimage';

export default function Home({ path, language, changeLanguage, i18nData }) {
  const images = [
    {
      path: '/running/home.png',
      description: `${i18nData.runningNearMyHome} Cincinnati, Ohio`
    },
    {
      path: '/running/topo.jpeg',
      description: `Topo Trail ${i18nData.halfMarathon}`
    },
    {
      path: '/running/flatirons.png',
      description: `Flatirons ${i18nData.in} Boulder, CO`
    },
    {
      path: '/running/niagaraultra.png',
      description: `Niagara Ultra ${i18nData.marathon} ${i18nData.inCanada} (${i18nData.withMyDad})`
    },
    {
      path: '/running/autumnblast.png',
      description: `Autumn Blast ${i18nData.halfMarathon} (${i18nData.withMyDadAndBrother})`
    }
  ];

  return (
    <>
      <Head>
        <title>{i18nData.Running} | Aleksai Losey</title>
      </Head>
      <Area
        title={i18nData.Running}
        description={i18nData.runningIntro}
        {...{
          path,
          language,
          changeLanguage
        }}
      >
        {images.map((image, index) => {
          return <AreaImage {...image} />;
        })}
      </Area>
    </>
  );
}
