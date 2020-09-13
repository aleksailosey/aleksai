import styles from './mobilemenu.module.sass';
import * as classNames from 'classnames';

import useRouter from 'hooks/useRouter';

import Social from 'components/social/social';

export default function MobileMenu({ show }) {
  const { path, pushPath, setState } = useRouter();

  var selectedFlag = false;

  return (
    <div
      id={styles.MobileMenu}
      className={classNames({
        [styles.MobileMenuHidden]: !show
      })}
    >
      <div id={styles.Header}>
        <div id={styles.HeaderLeft}>
          <div id={styles.MobileBlob}>
            <div className='tk-blob'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 747.2 726.7'>
                <path d='M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z'></path>
              </svg>
            </div>
          </div>
        </div>
        <div id={styles.HeaderRight}>
          <img
            id={styles.CloseIcon}
            src='/close.svg'
            onClick={() => setState({ mobileMenu: false })}
          />
        </div>
      </div>
      <div id={styles.Footer}>
        <Social path='/twitter.svg' link='https://twitter.com/aleksailosey' />
        <Social
          path='/strava.svg'
          link='https://www.strava.com/athletes/48447345'
        />
        <Social path='/github.svg' link='https://github.com/aleksailosey' />
      </div>
      {[
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Bookshelf',
          path: '/bookshelf'
        },
        {
          name: 'Running',
          path: '/running'
        },
        {
          name: 'Fun stuff',
          path: '/stuff'
        },
        {
          name: 'Contact me',
          path: '/contact'
        }
      ].map((section, index) => {
        return (
          <div
            key={index}
            className={classNames({
              [styles.SectionCont]: true,
              [styles.SectionContActive]: path === section.path
            })}
            onClick={() => {
              if (selectedFlag) return;
              selectedFlag = true;
              pushPath(section.path);
              setTimeout(() => {
                setState({
                  mobileMenu: false
                });
                selectedFlag = false;
              }, 500);
            }}
          >
            <span className={styles.SectionText}>{section.name}</span>
          </div>
        );
      })}
    </div>
  );
}
