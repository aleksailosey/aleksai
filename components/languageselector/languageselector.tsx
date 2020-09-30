import { Language } from 'types/Language';
import { useEffect } from 'react';
import styles from './languageselector.module.sass';

export default function LanguageSelect({ path, language, changeLanguage }) {
  return (
    <div id={styles.SelectorContainer}>
      <img id={styles.SelectIcon} src='/globe.svg' />
      <select
        id={styles.Selector}
        value={language}
        onChange={(e) => {
          var newLang = e.target.options[e.target.selectedIndex].value;
          changeLanguage(newLang);
        }}
        {...(path === '/404'
          ? {
              disabled: true
            }
          : {})}
      >
        {Object.entries(Language).map(([languageName, languageCode]) => (
          <option key={languageCode} value={languageCode}>
            {languageName}
          </option>
        ))}
      </select>
    </div>
  );
}
