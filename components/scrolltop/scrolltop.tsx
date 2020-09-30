import { useEffect } from 'react';

export default function ScrollTop({ path, language }) {
  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo(0, 0);
  }, [path, language]);
  return null;
}
