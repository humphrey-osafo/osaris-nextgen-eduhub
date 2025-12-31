const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Map of old paths to new kebab-case paths
const imageMap = {
  'Product tour-pana.svg': '/images/product-tour-pana.svg',
  'In progress-cuate.svg': '/images/in-progress-cuate.svg',
  'Programmer-pana.svg': '/images/programmer-pana.svg',
  'Cricket-amico.svg': '/images/cricket-amico.svg',
  'Making art-pana.svg': '/images/making-art-pana.svg',
  'forming team leadership-amico.svg': '/images/forming-team-leadership-amico.svg',
  'Training at home-rafiki.svg': '/images/training-at-home-rafiki.svg',
  'Coaches-amico.svg': '/images/coaches-amico.svg',
  'Digital transformation-bro.svg': '/images/digital-transformation-bro.svg',
  'Making art-bro.svg': '/images/making-art-bro.svg',
  'house party-rafiki.svg': '/images/house-party-rafiki.svg',
  'Innovation-bro.svg': '/images/innovation-bro.svg',
  'Digital transformation-rafiki.svg': '/images/digital-transformation-rafiki.svg',
  'Open source-cuate.svg': '/images/open-source-cuate.svg'
};

async function updateFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf8');
    let updated = false;

    for (const [oldPath, newPath] of Object.entries(imageMap)) {
      // Handle both quoted and unquoted paths
      const patterns = [
        `src=["']/images/${oldPath.replace(/ /g, '\\s*')}["']`,
        `src=["']${oldPath.replace(/ /g, '\\s*')}["']`
      ];

      for (const pattern of patterns) {
        const regex = new RegExp(pattern, 'g');
        if (content.match(regex)) {
          content = content.replace(regex, `src="${newPath}"`);
          updated = true;
        }
      }
    }

    if (updated) {
      await writeFile(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function processDirectory(directory) {
  const files = await readdir(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory() && file.name !== 'node_modules' && file.name !== '.next') {
      await processDirectory(fullPath);
    } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
      await updateFile(fullPath);
    }
  }
}

async function main() {
  console.log('Updating image references...');
  await processDirectory('.');
  console.log('Update complete!');
}

main().catch(console.error);
