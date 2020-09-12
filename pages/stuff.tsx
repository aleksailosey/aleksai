import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fun stuff | Aleksai Losey</title>
      </Head>
      <Area
        title='Fun stuff'
        description='Here is a small aggregate of stuff I find either compelling, interesting, or strange.'
      >
        <span>Fun stuff</span>
      </Area>
    </>
  );
}
