import Head from 'next/head';
import Area from 'components/area/area';
import AreaImage from 'components/area/areaimage';

const images = [
  {
    path: '/running/home.png',
    description: 'Running near my home in Cincinnati, Ohio'
  },
  {
    path: '/running/topo.jpeg',
    description: 'Topo Trail Half Marathon'
  },
  {
    path: '/running/flatirons.png',
    description: 'Flatirons in Boulder, CO'
  },
  {
    path: '/running/niagaraultra.png',
    description: 'Niagara Ultra Marathon in Canada (with my dad)'
  },
  {
    path: '/running/autumnblast.png',
    description: 'Autumn Blast Half Marathon (with my dad and brother)'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Running | Aleksai Losey</title>
      </Head>
      <Area
        title='Running'
        description='Here are some photos that were taken on my running escapades. Hover over images for a short description.'
      >
        {images.map((image, index) => {
          return <AreaImage {...image} />;
        })}
      </Area>
    </>
  );
}
