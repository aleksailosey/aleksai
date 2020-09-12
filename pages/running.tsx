import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Running | Aleksai Losey</title>
      </Head>
      <Area title='Running'>
        <span>Running</span>
      </Area>
    </>
  );
}
