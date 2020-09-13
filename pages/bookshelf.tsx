import { ReactNode } from 'react';
import Head from 'next/head';
import Area from 'components/area/area';
import AreaSection from 'components/area/areasection';
import AreaLink from 'components/area/arealink';

const currentlyReading = [
  {
    text:
      'Working in Public: The Making and Maintenance of Open Source Software',
    link:
      'https://www.amazon.com/Working-Public-Making-Maintenance-Software/dp/0578675862'
  }
];
const haveRead = [];

type Book = {
  text: string;
  link: string;
};

function populateLinks(books: Book[]): ReactNode {
  return (
    <>
      {books.map((book: Book) => {
        return <AreaLink {...book} />;
      })}
    </>
  );
}

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
      >
        <AreaSection title='What I am currently reading:' />
        {populateLinks(currentlyReading)}
        <AreaSection title='What I have recently read:' />
      </Area>
    </>
  );
}
