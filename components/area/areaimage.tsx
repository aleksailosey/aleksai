import { useState, useEffect } from 'react';
import styles from './area.module.sass';

export default function AreaImage({ path, description }) {
  const [loading, setLoading] = useState<boolean>(true);

  var image;
  if (process.env.NODE_ENV === 'production') {
    image = require('../../public/images' + path + '?trace');
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className={styles.AreaImageWrap}>
      {loading ? <div className={styles.AreaImageWrapOverlay}></div> : null}
      {!loading ? (
        <div className={styles.AreaImageWrapDescriptionOverlay}>
          <span className={styles.AreaImageDescription}>{description}</span>
        </div>
      ) : null}
      {process.env.NODE_ENV === 'production' ? (
        <>
          <img className={styles.AreaImage} src={image.trace} />
          <img className={styles.AreaImage} src={image.src} />
        </>
      ) : (
        <img className={styles.AreaImage} src={`/images${path}`} />
      )}
    </div>
  );
}
