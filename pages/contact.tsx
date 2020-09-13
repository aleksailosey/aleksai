import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | Aleksai Losey</title>
      </Head>
      <Area
        title='Contact me'
        descriptionMarkDown={
          <span>
            <span>Please feel free to contact me via email at </span>
            <a href='mailto:aleksailosey@gmail.com' target='__blank'>
              aleksailosey@gmail.com
            </a>
            <span>.</span>
          </span>
        }
      ></Area>
    </>
  );
}
