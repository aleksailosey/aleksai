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
  },
  {
    text: 'I Got a Name: The Jim Croce Story',
    link: 'https://www.amazon.com/Got-Name-Jim-Croce-Story/dp/0306821788'
  },
  {
    text: 'Dune (Book 1)',
    link: 'https://www.amazon.com/Dune-Chronicles-Book-1/dp/0441013597'
  }
];
const haveRead = [
  {
    text: 'Chaos Monkeys: Obscene Fortune and Random Failure in Silicon Valley',
    link:
      'https://www.amazon.com/Chaos-Monkeys-Obscene-Fortune-Failure/dp/0062458191/ref=sr_1_1?crid=3UNDZEBZ5O5X0&dchild=1&keywords=chaos+monkeys+obscene+fortune+and+random+failure+in+silicon+valley&qid=1600018803&s=books&sprefix=chaos+mon%2Cstripbooks%2C170&sr=1-1'
  },
  {
    text: 'Hackers & Painters: Big Ideas from the Computer Age',
    link:
      'https://www.amazon.com/Hackers-Painters-Big-Ideas-Computer/dp/1449389554'
  }
];

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
        {populateLinks(haveRead)}
      </Area>
    </>
  );
}
