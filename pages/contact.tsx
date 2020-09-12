import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | Aleksai Losey</title>
      </Head>
      <Area title='Contact me'>
        <span>Contact</span>
      </Area>
    </>
  );
}
