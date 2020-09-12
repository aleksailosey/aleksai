import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fun stuff | Aleksai Losey</title>
      </Head>
      <Area title='Fun stuff'>
        <span>Fun stuff</span>
      </Area>
    </>
  );
}
