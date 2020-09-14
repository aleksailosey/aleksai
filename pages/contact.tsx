import Head from 'next/head';
import Area from 'components/area/area';

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact me | Aleksai Losey</title>
      </Head>
      <Area
        title='Contact me'
        descriptionMarkDown={
          <span>
            <span>I'm always available to talk via email at </span>
            <a href='mailto:aleksailosey@gmail.com' target='__blank'>
              aleksailosey@gmail.com
            </a>
            <span>. You can also </span>
            <a
              href='https://twitter.com/messages/compose?recipient_id=1196260254461259776'
              target='__blank'
            >
              DM me on Twitter
            </a>
            <span>.</span>
          </span>
        }
      ></Area>
    </>
  );
}
