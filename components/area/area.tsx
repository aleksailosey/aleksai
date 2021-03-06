import styles from './area.module.sass';
import { ReactNode } from 'react';
import LanguageSelector from 'components/languageselector/languageselector';

type AreaProps = {
  title: string;
  description?: string;
  descriptionMarkDown?: ReactNode;
  children?: any;
  path: string;
  language: string;
  changeLanguage: Function;
};

export default function Area({
  title,
  description,
  descriptionMarkDown,
  children,
  path,
  language,
  changeLanguage
}: AreaProps) {
  return (
    <div id={styles.AreaWrap}>
      <div id={styles.AreaTitleCont}>
        <span id={styles.AreaTitle}>{title}</span>
      </div>
      {description ? (
        <div id={styles.AreaDescriptionCont}>
          <span id={styles.AreaDescription}>{description}</span>
        </div>
      ) : null}
      {descriptionMarkDown ? (
        <div id={styles.AreaDescriptionCont}>{descriptionMarkDown}</div>
      ) : null}
      {children}
    </div>
  );
}
