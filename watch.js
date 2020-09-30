const watch = require('node-watch');
const fs = require('fs');
const path = require('path');

function toTitle(str) {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

function removeFileOrDir(path) {
  if (fs.existsSync(path)) {
    const stat = fs.lstatSync(path);
    if (stat.isFile()) {
      fs.unlinkSync(path);
    } else if (stat.isDirectory()) {
      fs.rmdirSync(path, { recursive: true });
    }
  }
}

function writeFileOrDir(reference, path, contentHook) {
  const stat = fs.lstatSync(reference);
  if (stat.isFile()) {
    fs.writeFileSync(path, contentHook(reference));
  } else if (stat.isDirectory()) {
    fs.mkdirSync(path);
  }
}

function getRootCode(importPath) {
  return `import asRootPage from 'hocs/asRootPage';
import fn from '${importPath.substring(0, importPath.lastIndexOf('.'))}';

export default asRootPage(fn);
  `;
}

function getLanguageCode(importPath) {
  return `import asLanguagePage from 'hocs/asLanguagePage';
import fn from '${importPath.substring(0, importPath.lastIndexOf('.'))}';

export default asLanguagePage(fn);
  `;
}

watch('./p', { recursive: true }, function (e, path) {
  const pairedRootPath = path.replace('p', 'pages');
  const pairedLanguagePath = path.replace('p', 'pages/[language]');
  if (e === 'update') {
    writeFileOrDir(path, pairedRootPath, getRootCode);
    writeFileOrDir(path, pairedLanguagePath, getLanguageCode);
  } else if (e === 'remove') {
    removeFileOrDir(pairedRootPath);
    removeFileOrDir(pairedLanguagePath);
  }
});
