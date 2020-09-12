import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aleksai Losey</title>
      </Head>
      <Area
        title='Home'
        description="Hey! My name is Aleksai Losey. I'm currently a university student. I like to code, run, and rock climb."
      />
    </>
  );
}
