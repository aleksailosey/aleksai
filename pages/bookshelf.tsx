import Head from 'next/head';
import Area from 'components/area/area';

export default function Bookshelf() {
  return (
    <>
      <Head>
        <title>Bookshelf | Aleksai Losey</title>
      </Head>
      <Area title='Bookshelf'>
        <span>Bookshelf</span>
      </Area>
    </>
  );
}
