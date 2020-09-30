import { Language } from 'types/Language';

/**
 * @param  language
 * @return          if `language` is a supported language code
 */
export default function isValidLanguage(language: string): boolean {
  return Object.values(Language).indexOf(language as Language) !== -1;
}
