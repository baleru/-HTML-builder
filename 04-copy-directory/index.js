const fs = require('fs').promises;
const path = require('path');

async function copyDir(src, dest) {
  try {
    const destExists = await fs
      .access(dest)
      .then(() => true)
      .catch(() => false);

    if (!destExists) {
      await fs.mkdir(dest);
    }

    const files = await fs.readdir(src);

    await Promise.all(
      files.map(async (file) => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        await fs.copyFile(srcPath, destPath);
      }),
    );

    console.log('Directory copied successfully.');
  } catch (err) {
    console.error('Error copying directory:', err);
  }
}

const sourceFolder = './files';
const destinationFolder = './files-copy';

copyDir(sourceFolder, destinationFolder);
