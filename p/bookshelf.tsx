import { ReactNode } from 'react';
import Head from 'next/head';
import Area from 'components/area/area';
import AreaSection from 'components/area/areasection';
import AreaLink from 'components/area/arealink';

import { Link } from 'types/Link';

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

function populateLinks(books: Link[], pushPath): ReactNode {
  return (
    <>
      {books.map((book: Link, index: number) => {
        return <AreaLink key={index} {...{ ...book, pushPath }} />;
      })}
    </>
  );
}

export default function Bookshelf({
  pushPath,
  path,
  language,
  changeLanguage,
  i18nData
}) {
  return (
    <>
      <Head>
        <title>{i18nData.Bookshelf} | Aleksai Losey</title>
      </Head>
      <Area
        title={i18nData.Bookshelf}
        descriptionMarkDown={
          <span>
            <span>{i18nData.bookshelfIntro} </span>
            <a
              href='https://github.com/aleksailosey/aleksai/pulls'
              target='__blank'
            >
              {i18nData.createPullRequest}
            </a>
            <span>!</span>
          </span>
        }
        {...{
          path,
          language,
          changeLanguage
        }}
      >
        <AreaSection title={`${i18nData.currentlyReading}:`} />
        {populateLinks(currentlyReading, pushPath)}
        <AreaSection title={`${i18nData.recentlyRead}:`} />
        {populateLinks(haveRead, pushPath)}
      </Area>
    </>
  );
}
