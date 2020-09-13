import Head from 'next/head';
import Area from 'components/area/area';
import AreaLink from 'components/area/arealink';

export default function _404() {
  return (
    <>
      <Head>
        <title>404: Page not found</title>
      </Head>
      <Area
        title='404: Page not found'
        description="We couldn't find what you were looking for. Please check out the following sections instead."
      >
        <AreaLink text='Home' link='/' local={true} />
        <AreaLink text='Bookshelf' link='/bookshelf' local={true} />
        <AreaLink text='Running' link='/running' local={true} />
        <AreaLink text='Fun stuff' link='/stuff' local={true} />
        <AreaLink text='Contact me' link='/contact' local={true} />
      </Area>
    </>
  );
}
