const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate({
  key: 'AIzaSyCsu1YZy-RwQdy4zfj0QIW6cY91J6oX-EA'
});
const watch = require('node-watch');
const fs = require('fs');
const targetLanguages = [
  'es',
  'zh',
  'hi',
  'bn',
  'fr',
  'de',
  'ja',
  'ru',
  'pt',
  'ko'
];

const EMPTY_CODE = `
module.exports.cache = {};
module.exports.default = {};
`;

async function translateText(text, target) {
  let [translations] = await translate.translate(text, target);
  translation = (Array.isArray(translations)
    ? translations
    : [translations])[0];
  return translation;
}

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

watch('./i18n/en', { recursive: true }, async (e, path) => {
  if (e === 'update') {
    const baseObject = requireUncached(`./${path}`).default;

    for (const targetLanguage of targetLanguages) {
      const langDir = `./i18n/${targetLanguage}`;
      const langPath = `./${path.replace('en', targetLanguage)}`;

      if (!fs.existsSync(langDir)) fs.mkdirSync(langDir);
      if (!fs.existsSync(langPath)) fs.writeFileSync(langPath, EMPTY_CODE);

      const cachedObject = requireUncached(langPath).cache;
      const translatedObject = requireUncached(langPath).default;

      const newTranslatedObject = {};

      for (const key in baseObject) {
        // No translation is needed because field is cached and the same.
        if (key in cachedObject && baseObject[key] === cachedObject[key]) {
          newTranslatedObject[key] = translatedObject[key];
        } else {
          console.log(`translating ${key}`);
          newTranslatedObject[key] = await translateText(
            baseObject[key],
            targetLanguage
          );
        }
      }

      fs.writeFileSync(
        langPath,
        `
        module.exports.cache = ${JSON.stringify(baseObject)};
        module.exports.default = ${JSON.stringify(newTranslatedObject)};
      `
      );
    }
  }
});
