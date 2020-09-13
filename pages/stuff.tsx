import Head from 'next/head';
import Area from 'components/area/area';
import AreaLink from 'components/area/arealink';

import { Link } from 'types/Link';

const links: Link[] = [
  {
    text:
      'Inside the clone factory: the story of the Samwer brothers and Rocket Internet',
    link: 'https://www.wired.co.uk/article/inside-the-clone-factory'
  },
  {
    text:
      'Blitzscaling 18: Brian Chesky on Launching Airbnb and the Challenges of Scale',
    link: 'https://www.youtube.com/watch?v=W608u6sBFpo'
  },
  {
    text: 'For Twitter C.E.O., Well-Orchestrated Accidents',
    link: 'https://www.nytimes.com/2009/03/08/jobs/08bosses.html?_r=1'
  },
  {
    text:
      'How Two Brothers Turned Seven Lines of Code Into a $9.2 Billion Startup',
    link:
      'https://www.bloomberg.com/news/features/2017-08-01/how-two-brothers-turned-seven-lines-of-code-into-a-9-2-billion-startup?cmpid=socialflow-twitter-businessweek&utm_content=businessweek&utm_campaign=socialflow-organic&utm_source=twitter&utm_medium=social'
  },
  {
    text: 'What Can A Technologist Do About Climate Change?',
    link: 'http://worrydream.com/ClimateChange/'
  },
  {
    text: "Amazon's Move Against MongoDB Doesn't Worry Me",
    link:
      'https://www.fool.com/investing/2019/01/31/amazons-move-against-mongodb-doesnt-worry-me.aspx'
  },
  {
    text:
      'Silicon Valley arrogance: “I can tell you which startups will succeed, without even knowing what they do"',
    link:
      'https://m.signalvnoise.com/silicon-valley-arrogance-i-can-tell-you-which-startups-will-succeed-without-even-knowing-what/'
  },
  {
    text: 'End-user programming',
    link: 'https://www.inkandswitch.com/end-user-programming.html'
  },
  {
    text: 'Are we making the web too complicated?',
    link: 'https://seldo.com/posts/are_we_making_the_web_too_complicated'
  },
  {
    text: 'A quick story about GitHub’s CEO, Chris Wanstrath',
    link:
      'https://medium.com/@andygcook/a-quick-story-about-githubs-ceo-chris-wanstrath-837610c0e332'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Fun stuff | Aleksai Losey</title>
      </Head>
      <Area
        title='Fun stuff'
        description='Here is a small aggregate of stuff I find either compelling, interesting, or strange.'
      >
        {links.map((link: Link, index: number) => {
          return <AreaLink key={index} {...link} />;
        })}
      </Area>
    </>
  );
}
