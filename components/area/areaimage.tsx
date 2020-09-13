import { useState, useEffect } from 'react';
import styles from './area.module.sass';

export default function AreaImage({ path, description }) {
  const [loading, setLoading] = useState<boolean>(true);

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
        <img
          className={styles.AreaImage}
          src={require('../../public/images' + path + '?lqip')}
        />
      ) : (
        <img className={styles.AreaImage} src={`/images${path}`} />
      )}
    </div>
  );
}
