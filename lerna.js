const { loadPackages, iter, exec } = require('lerna-script');
const fs = require('fs').promises;
const path = require('path')

// ------------------------------------------------------------
// Generates a new README with updates primitive details
// ------------------------------------------------------------
async function updateReadme(log) {
  log.info('updateReadme', 'Updating README documentation');
  const frontmatter = require('@github-docs/frontmatter');
  const markdownMagic = require('markdown-magic');
  const tablemark = require('json-to-markdown-table');
  const githubURL = 'https://github.com/davedbase/solid-primitives/tree/main/packages/';
  const sizeShield = 'https://img.shields.io/bundlephobia/minzip/';
  const bundlephobiaURL = 'https://bundlephobia.com/package/';
  const npmShield = 'https://img.shields.io/npm/v/';
  const npmURL = 'https://www.npmjs.com/package/';
  let categories = {};
  await iter.forEach(await loadPackages())(
    async (lernaPackage) => {
      const md = await fs.readFile(`${lernaPackage.location}/README.md`, 'binary');
      const { data } = frontmatter(md);
      console.log(lernaPackage.version);
      if (data.Name) {
        data.Name = `[${data.Name}](${githubURL}${data.Name})`;
        data.Size = `[![SIZE](${sizeShield}${lernaPackage.name})](${bundlephobiaURL}${lernaPackage.name})`;
        data.NPM = `[![VERSION](${npmShield}${lernaPackage.name})](${npmURL}${lernaPackage.name})`;
        if (! data.Stage) {
          data.Stage = 'Stage-2';
        }
        if (data.Primitives.includes(',')) {
          data.Primitives = data.Primitives.split(',').map((item) => item.trim()).join('<br />');
        } else {
          data.Primitives = data.Primitives;
        }
        const category = data.Category || 'Misc';
        categories[category] = Array.isArray(categories[category]) ? [ ...categories[category], data ] : [ data ];
      }
    }
  );
  return new Promise((resolve) => {
    markdownMagic(path.join(__dirname, 'README.md'), {
      transforms: {
        GENERATE_PRIMITIVES_TABLE: () => {
          return Object.entries(categories).reduce((md, [cateogry, items]) => {
            md += `### ${cateogry}\n\n`;
            md += tablemark(items, [ 'Name', 'Stage', 'Primitives', 'Size', 'NPM' ])
            return md;
          }, '');
        }
      }
    }, resolve)
  });
}

module.exports.updateReadme = updateReadme;
