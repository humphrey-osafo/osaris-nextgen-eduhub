const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const copyFile = promisify(fs.copyFile);
const unlink = promisify(fs.unlink);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const imageExtensions = ['.svg', '.png', '.jpg', '.jpeg', '.webp'];
const sourceDirs = [
  'nextgen images',
  'public/images'
];
const targetDir = 'public/images';

// Create kebab-case filename
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

async function processDirectory(directory) {
  const files = await readdir(directory);
  const fileMap = {};

  for (const file of files) {
    const filePath = path.join(directory, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      const subFiles = await processDirectory(filePath);
      Object.assign(fileMap, subFiles);
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      const newName = toKebabCase(file);
      const sourcePath = filePath;
      const targetPath = path.join(targetDir, newName);
      
      // Only process if it's not already in the target directory
      if (!filePath.startsWith(targetDir)) {
        await copyFile(sourcePath, targetPath);
        fileMap[file] = `/images/${newName}`;
        console.log(`Copied: ${sourcePath} -> ${targetPath}`);
      } else if (file !== newName) {
        const newPath = path.join(targetDir, newName);
        await copyFile(sourcePath, newPath);
        fileMap[file] = `/images/${newName}`;
        console.log(`Renamed: ${sourcePath} -> ${newPath}`);
      }
    }
  }

  return fileMap;
}

async function updateFileReferences(fileMap) {
  const files = await readdir('.');
  
  for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      let content = await readFile(file, 'utf8');
      let updated = false;
      
      for (const [oldName, newPath] of Object.entries(fileMap)) {
        if (content.includes(oldName)) {
          content = content.replace(new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
          updated = true;
        }
      }
      
      if (updated) {
        await writeFile(file, content, 'utf8');
        console.log(`Updated references in: ${file}`);
      }
    }
  }
}

async function main() {
  try {
    // Process all source directories
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        console.log(`\nProcessing directory: ${dir}`);
        const fileMap = await processDirectory(dir);
        console.log('\nUpdating file references...');
        await updateFileReferences(fileMap);
      }
    }
    
    console.log('\nMigration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  }
}

main();
