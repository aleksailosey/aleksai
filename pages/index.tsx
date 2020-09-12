import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aleksai Losey</title>
      </Head>
      <Area title='Home'>
        <span>Home</span>
      </Area>
    </>
  );
}
