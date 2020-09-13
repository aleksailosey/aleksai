import Head from 'next/head';
import Area from 'components/area/area';

export default function Bookshelf() {
  return (
    <>
      <Head>
        <title>Bookshelf | Aleksai Losey</title>
      </Head>
      <Area
        title='Bookshelf'
        descriptionMarkDown={
          <span>
            <span>
              Here is a list of books that I have read or am currently reading.
              If you want to suggest a book for me to read, please feel free to{' '}
            </span>
            <a
              href='https://github.com/aleksailosey/aleksai/pulls'
              target='__blank'
            >
              create a pull request
            </a>
            <span>!</span>
          </span>
        }
      ></Area>
    </>
  );
}
